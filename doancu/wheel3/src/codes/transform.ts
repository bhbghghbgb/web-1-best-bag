import userscriptTemplate from '@/assets/wheel.scripter.js?raw'
import { babelMergeAll } from '@armit/babel-merge'
import generate from '@babel/generator'
import { parse, type ParserOptions } from '@babel/parser'
import template from '@babel/template'
import type { Node } from '@babel/types'
import debug from 'debug'
import jsesc from 'jsesc'
import { compressToUTF16 } from 'lz-string'
import prettyBytes from 'pretty-bytes'
import { minify_sync } from 'terser'

interface TransformPipelineState {
  code?: string
  deobfuscated?: string
  formatted?: string // this step run prettier formatter to enforce consistent brace style for all control statements
  node?: Node
  generated?: string
  minified?: string
  compressed?: string
  escaped?: string
  userscript?: string
}

interface TransformParams {
  code: string
  parserOptions?: ParserOptions
  patch: (transformState: TransformPipelineState) => void // Custom AST patcher
  generate?: {
    generated?: (transformState: TransformPipelineState) => string // Custom formatter
    minified?: (transformState: TransformPipelineState) => string // Minifier (works on source)
    compressed?: (transformState: TransformPipelineState) => string
    escaped?: (transformState: TransformPipelineState) => string
    userscript?: (transformState: TransformPipelineState) => string
  }
}

const BABEL_PARSE_OPTIONS: ParserOptions = {
  allowImportExportEverywhere: true,
  allowAwaitOutsideFunction: true,
  allowYieldOutsideFunction: true,
  allowNewTargetOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  attachComment: false,
  // Error: The `annexB` option can only be set to `false`.
  // annexB: true, // Keeping default for broader compatibility
  createImportExpressions: true, // Opting in for future default
  createParenthesizedExpressions: false,
  errorRecovery: true,
  // plugins: [
  //   'jsx',
  //   [
  //     'typescript',
  //     {
  //       dts: true, // Enable parsing within TypeScript ambient contexts
  //       disallowAmbiguousJSXLike: false, // Allowing potentially ambiguous JSX-like syntax
  //     },
  //   ],
  // ],
  sourceType: 'unambiguous',
  sourceFilename: undefined,
  startColumn: 0,
  startLine: 1,
  startIndex: 0,
  strictMode: false, // Keeping default, can be enabled if strict parsing is desired
  ranges: false,
  tokens: false,
}

const Logger = debug('transform')

async function transform(params: TransformParams): Promise<TransformPipelineState> {
  const { code, parserOptions, patch } = params

  // Ensure `generate` exists, then merge defaults inside it
  const generate = {
    generated: pipelineGenerate,
    minified: pipelineMinify,
    compressed: pipelineCompress,
    escaped: pipelineEscape,
    userscript: pipelineUserscript,
    ...params.generate, // Merge user-provided functions (overrides defaults if provided)
  }

  const state: TransformPipelineState = {}

  const mergedParseOptions: ParserOptions = babelMergeAll([
    BABEL_PARSE_OPTIONS,
    parserOptions ?? {},
  ]) as ParserOptions
  mergedParseOptions.sourceType ??= 'unambiguous'
  const ast = parse(code, mergedParseOptions)
  if (ast?.errors?.length) {
    Logger.extend('parse')('Errors', ast.errors)
  }
  state.node = ast

  patch(state)

  const getByteSize = (str: string) => new Blob([str]).size
  const log = Logger.extend('generate')

  const steps: ((state: TransformPipelineState) => string)[] = [
    generate.generated,
    generate.minified,
    generate.compressed,
    generate.escaped,
    generate.userscript,
  ]

  for (const step of steps) {
    log(`${step.name} started`)
    const output = step(state)
    const byteSize = prettyBytes(getByteSize(output))
    log(`${step.name} finished with ${byteSize} output size`)
  }

  return state
}

function pipelineGenerate(state: TransformPipelineState): string {
  const { node } = state
  if (!node) {
    throw new Error('pipelineGenerate needs file node')
  }
  const out = generate(node, {
    compact: false,
    concise: false,
    minified: false,
    comments: false,
  }).code
  state.generated = out
  return out
}

function pipelineMinify(state: TransformPipelineState): string {
  const { generated: formatted } = state
  if (!formatted) {
    throw new Error('pipelineMinify needs formatted code')
  }
  const out = minify_sync(formatted, { ecma: 2020 }).code
  if (!out) {
    throw new Error('pipelineMinify terser minify failed')
  }
  state.minified = out
  return out
}

function pipelineCompress(state: TransformPipelineState): string {
  const { generated: formatted, minified } = state
  const inp = minified || formatted
  if (!inp) {
    throw new Error('pipelineCompress needs minifed or formatted code')
  }
  const out = compressToUTF16(inp)
  state.compressed = out
  return out
}

function pipelineEscape(state: TransformPipelineState): string {
  const { compressed } = state
  if (!compressed) {
    throw new Error('pipelineEscape needs compressed code')
  }
  // TODO: rewrite template to allow not using lzstring decompression
  const out = jsesc(compressed, {
    quotes: 'single',
    wrap: true,
    minimal: true,
    compact: true,
    es6: true,
  })
  state.escaped = out
  return out
}

function pipelineUserscript(state: TransformPipelineState): string {
  const { escaped } = state
  if (!escaped) {
    throw new Error('pipelineUserscript needs escaped code')
  }
  const out = generate(
    template.program(userscriptTemplate, {
      preserveComments: true,
      sourceType: 'script',
    })({
      COMPRESSED_SOURCE: escaped,
    }),
    { comments: true, compact: false, concise: false, minified: false },
  ).code
  state.userscript = out
  return out
}

export {
  pipelineCompress,
  pipelineMinify,
  pipelineGenerate as pipelineToFormatted,
  pipelineUserscript,
  transform,
  type TransformPipelineState,
}
