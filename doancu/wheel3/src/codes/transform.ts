import userscriptTemplate from '@/assets/wheel.scripter.js?raw'
import generate from '@babel/generator'
import { parse } from '@babel/parser'
import template from '@babel/template'
import { stringLiteral, type Node } from '@babel/types'
import debug from 'debug'
import jsesc from 'jsesc'
import { compressToUTF16 } from 'lz-string'
import { format } from 'prettier/standalone'
import { minify } from 'terser'
import type { PartialDeep } from 'type-fest'
import { deobfuscateCode } from './deobfuscate'
import {
  BABEL_GENERATE,
  BABEL_GENERATE_USER,
  BABEL_PARSE_OPTIONS,
  BABEL_TEMPLATE_OPTIONS,
  getPrettierOptions,
  JSESC_OPTIONS,
  TERSER_OPTIONS,
} from './options'

/**
 * Transformation Pipeline State
 */
export type TransformPipelineState = Partial<{
  code: string
  deobfuscated: string
  formatted: string
  parsed: Node
  patched: Node
  generated: string
  minified: string
  compressed: string
  escaped: string
  userscript: string
}>

type TransformPipelineFunction<T> = (
  state: TransformPipelineState,
) => Promise<T | undefined> | T | undefined
/**
 * Transformation Parameters - Allows users to customize the pipeline
 */
export type TransformParams = PartialDeep<{
  code: string
  parsing: {
    deobfuscator: TransformPipelineFunction<string>
    formatter: TransformPipelineFunction<string>
    parser: TransformPipelineFunction<Node>
  }
  patch: TransformPipelineFunction<Node>
  generation: {
    generator: TransformPipelineFunction<string>
    minifier: TransformPipelineFunction<string>
    compressor: TransformPipelineFunction<string>
    escaper: TransformPipelineFunction<string>
    userscripter: TransformPipelineFunction<string>
  }
}>

const Logger = debug('transform')

/**
 * Main transformation function
 */
async function transform(params: TransformParams): Promise<TransformPipelineState> {
  const state: TransformPipelineState = { code: params.code }

  // Helper function to handle async and sync functions uniformly
  async function executePipelineStep<T>(
    step: TransformPipelineFunction<T> | undefined,
    state: TransformPipelineState,
  ): Promise<T | undefined> {
    if (!step) {
      return
    }
    const result = step(state)
    return result instanceof Promise ? await result : result
  }

  // Parsing Phase - Directly assign pipeline results
  state.deobfuscated = await executePipelineStep(
    params.parsing?.deobfuscator ?? pipelineDeobfuscate,
    state,
  )
  state.formatted = await executePipelineStep(params.parsing?.formatter ?? pipelineFormat, state)
  state.parsed = await executePipelineStep(params.parsing?.parser ?? pipelineParse, state)

  if (!state.parsed) throw new Error('Parsing failed')

  // Apply AST modifications
  state.patched = await executePipelineStep(params.patch ?? (() => undefined), state)

  // Generation Phase - Assign transformed attributes directly
  state.generated = await executePipelineStep(
    params.generation?.generator ?? pipelineGenerate,
    state,
  )
  state.minified = await executePipelineStep(params.generation?.minifier ?? pipelineMinify, state)
  state.compressed = await executePipelineStep(
    params.generation?.compressor ?? pipelineCompress,
    state,
  )
  state.escaped = await executePipelineStep(params.generation?.escaper ?? pipelineEscape, state)
  state.userscript = await executePipelineStep(
    params.generation?.userscripter ?? pipelineUserscript,
    state,
  )

  return state
}

/**
 * Parsing Step Functions
 */
async function defaultDeobfuscator(code: string): Promise<string> {
  return await deobfuscateCode(code)
}

async function defaultFormatter(code: string): Promise<string> {
  return await format(code, await getPrettierOptions()) // Ensures consistent brace style with
}

function defaultParser(code: string): Node | undefined {
  return parse(code, BABEL_PARSE_OPTIONS)
}

async function pipelineDeobfuscate(state: TransformPipelineState): Promise<string | undefined> {
  return state.code ? defaultDeobfuscator(state.code) : undefined
}

async function pipelineFormat(state: TransformPipelineState): Promise<string | undefined> {
  return state.deobfuscated ? defaultFormatter(state.deobfuscated) : undefined
}

function pipelineParse(state: TransformPipelineState): Node | undefined {
  return state.formatted ? defaultParser(state.formatted) : undefined
}

/**
 * Code Generation Step Functions
 */
function defaultGenerate(node: Node): string | undefined {
  return generate(node, BABEL_GENERATE).code
}

async function defaultMinify(code: string): Promise<string | undefined> {
  return (await minify(code, TERSER_OPTIONS)).code
}

function defaultCompress(code: string): string | undefined {
  return compressToUTF16(code)
}

function defaultEscape(code: string): string | undefined {
  return jsesc(code, JSESC_OPTIONS)
}

function defaultUserscript(code: string): string | undefined {
  return generate(
    template.program(
      userscriptTemplate,
      BABEL_TEMPLATE_OPTIONS,
    )({
      COMPRESSED_SOURCE: stringLiteral(code),
    }),
    BABEL_GENERATE_USER,
  ).code
}

function pipelineGenerate(state: TransformPipelineState): string | undefined {
  return state.patched ? defaultGenerate(state.patched) : undefined
}

async function pipelineMinify(state: TransformPipelineState): Promise<string | undefined> {
  return state.generated ? defaultMinify(state.generated) : undefined
}

function pipelineCompress(state: TransformPipelineState): string | undefined {
  const code = state.generated ?? state.minified
  return code ? defaultCompress(code) : undefined
}

function pipelineEscape(state: TransformPipelineState): string | undefined {
  const code = state.compressed ?? state.minified ?? state.generated
  return code ? defaultEscape(code) : undefined
}

function pipelineUserscript(state: TransformPipelineState): string | undefined {
  return state.escaped ? defaultUserscript(state.escaped) : undefined
}

/**
 * Export functions
 */
export {
  pipelineCompress,
  pipelineDeobfuscate,
  pipelineEscape,
  pipelineFormat,
  pipelineGenerate,
  pipelineMinify,
  pipelineParse,
  pipelineUserscript,
  transform,
}
