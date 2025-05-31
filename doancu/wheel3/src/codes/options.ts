import type { GeneratorOptions } from '@babel/generator'
import type { ParserOptions } from '@babel/parser'
import type { TemplateBuilderOptions } from '@babel/template'
import type { Opts } from 'jsesc'
import type { Options } from 'prettier'
import type { MinifyOptions } from 'terser'
import { configs } from '@eslint/js'

import { defineConfig } from 'eslint/config'

export const BABEL_PARSE_OPTIONS: ParserOptions = {
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

export const BABEL_TEMPLATE_OPTIONS: TemplateBuilderOptions = {
  preserveComments: true,
  sourceType: 'script',
}

export const BABEL_GENERATE: GeneratorOptions = {
  compact: false,
  concise: false,
  minified: false,
  comments: false,
}

export const JSESC_OPTIONS: Opts = {
  quotes: 'single',
  wrap: false,
  minimal: true,
  compact: true,
  es6: true,
}

export const BABEL_GENERATE_USER: GeneratorOptions = {
  ...BABEL_GENERATE,
  comments: true,
  jsescOption: { ...JSESC_OPTIONS, wrap: true },
}

export const TERSER_OPTIONS: MinifyOptions = { ecma: 2020 }

export async function getPrettierOptions(): Promise<Options> {
  return {
    parser: 'babel',
    plugins: [
      await import('prettier/plugins/babel'),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore https://github.com/prettier/prettier/issues/16501
      await import('prettier/plugins/estree'),
      await import('prettier-plugin-curly'),
    ],
  }
}

export const ESLINT_OPTIONS = defineConfig([configs.all])
