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
import { Linter } from 'eslint-linter-browserify'
import {
  BABEL_GENERATE,
  BABEL_GENERATE_USER,
  BABEL_PARSE_OPTIONS,
  BABEL_TEMPLATE_OPTIONS,
  ESLINT_OPTIONS,
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
  linted: string
  parsed: Node
  patched: Node
  generated: string
  generatedFormatted: string
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
    linter: TransformPipelineFunction<string>
    parser: TransformPipelineFunction<Node>
  }
  patch: TransformPipelineFunction<Node>
  generation: {
    generator: TransformPipelineFunction<string>
    formatter: TransformPipelineFunction<string>
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
  state.linted = await executePipelineStep(params.parsing?.linter ?? pipelineLint, state)
  state.parsed = await executePipelineStep(params.parsing?.parser ?? pipelineParse, state)

  if (!state.parsed) {
    throw new Error('Parsing failed')
  }

  // Apply AST modifications
  state.patched = await executePipelineStep(params.patch ?? (() => undefined), state)

  // Generation Phase - Assign transformed attributes directly
  state.generated = await executePipelineStep(
    params.generation?.generator ?? pipelineGenerate,
    state,
  )
  state.generatedFormatted = await executePipelineStep(
    params.generation?.formatter ?? pipelineFormat,
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
async function defaultDeobfuscator(code: string): Promise<string | undefined> {
  return await deobfuscateCode(code)
}

async function defaultLinter(code: string): Promise<string | undefined> {
  return new Linter().verifyAndFix(code, ESLINT_OPTIONS).output
}

function defaultParser(code: string): Node | undefined {
  return parse(code, BABEL_PARSE_OPTIONS)
}

async function pipelineDeobfuscate(state: TransformPipelineState): Promise<string | undefined> {
  return state.code ? defaultDeobfuscator(state.code) : undefined
}

async function pipelineLint(state: TransformPipelineState): Promise<string | undefined> {
  return state.deobfuscated ? defaultLinter(state.deobfuscated) : undefined
}

function pipelineParse(state: TransformPipelineState): Node | undefined {
  return state.linted ? defaultParser(state.linted) : undefined
}

/**
 * Code Generation Step Functions
 */
function defaultGenerator(node: Node): string | undefined {
  return generate(node, BABEL_GENERATE).code
}

async function defaultPrettier(code: string): Promise<string | undefined> {
  return await format(code, await getPrettierOptions())
}

async function defaultFormatter(code: string): Promise<string | undefined> {
  const linted = await defaultLinter(code)
  return linted ? await defaultPrettier(linted) : undefined
}

async function defaultMinifier(code: string): Promise<string | undefined> {
  return (await minify(code, TERSER_OPTIONS)).code
}

function defaultCompressor(code: string): string | undefined {
  return compressToUTF16(code)
}

function defaultEscaper(code: string): string | undefined {
  return jsesc(code, JSESC_OPTIONS)
}

function defaultUserscripter(code: string): string | undefined {
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
  return state.patched ? defaultGenerator(state.patched) : undefined
}

async function pipelineFormat(state: TransformPipelineState): Promise<string | undefined> {
  return state.generated ? defaultFormatter(state.generated) : undefined
}

async function pipelineMinify(state: TransformPipelineState): Promise<string | undefined> {
  return state.generated ? defaultMinifier(state.generated) : undefined
}

function pipelineCompress(state: TransformPipelineState): string | undefined {
  const code = state.minified ?? state.generated
  return code ? defaultCompressor(code) : undefined
}

function pipelineEscape(state: TransformPipelineState): string | undefined {
  const code = state.compressed ?? state.minified ?? state.generated
  return code ? defaultEscaper(code) : undefined
}

function pipelineUserscript(state: TransformPipelineState): string | undefined {
  return state.escaped ? defaultUserscripter(state.escaped) : undefined
}

/**
 * Export functions
 */
export {
  defaultCompressor,
  defaultDeobfuscator,
  defaultEscaper,
  defaultLinter,
  defaultGenerator,
  defaultPrettier,
  defaultFormatter,
  defaultMinifier,
  defaultParser,
  defaultUserscripter,
  pipelineCompress,
  pipelineDeobfuscate,
  pipelineEscape,
  pipelineLint,
  pipelineGenerate,
  pipelineMinify,
  pipelineParse,
  pipelineUserscript,
  transform,
}
