import { babelMergeAll } from "@armit/babel-merge";
import { parse, ParserOptions } from "@babel/parser";
import debug from "debug";
import prettyBytes from "pretty-bytes";

interface TransformPipelineState {
  node?: File;
  formatted?: string;
  minified?: string;
  compressed?: string;
  userscript?: string;
}

interface TransformParams {
  code: string;
  parserOptions?: ParserOptions;
  patch: (transformState: TransformPipelineState) => void; // Custom AST patcher
  generate: {
    formatted: (transformState: TransformPipelineState) => string; // Custom formatter
    minified: (transformState: TransformPipelineState) => string; // Minifier (works on source)
    compressed: (transformState: TransformPipelineState) => string;
    userscript: (transformState: TransformPipelineState) => string;
  };
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
  annexB: true, // Keeping default for broader compatibility
  createImportExpressions: true, // Opting in for future default
  createParenthesizedExpressions: false,
  errorRecovery: true,
  plugins: [
    "jsx",
    [
      "typescript",
      {
        dts: true, // Enable parsing within TypeScript ambient contexts
        disallowAmbiguousJSXLike: false, // Allowing potentially ambiguous JSX-like syntax
      },
    ],
  ],
  sourceType: "unambiguous",
  sourceFilename: undefined,
  startColumn: 0,
  startLine: 1,
  startIndex: 0,
  strictMode: false, // Keeping default, can be enabled if strict parsing is desired
  ranges: false,
  tokens: false,
};

const Logger = debug("transform");

export async function transform(params: TransformParams) {
  const { code, parserOptions, patch, generate } = params;
  const {
    formatted: formattedFn,
    minified: minifiedFn,
    compressed: compressedFn,
    userscript: userscriptFn,
  } = generate;

  const state: TransformPipelineState = {};

  const mergedParseOptions: ParserOptions = babelMergeAll([
    BABEL_PARSE_OPTIONS,
    parserOptions ?? {},
  ]) as ParserOptions;
  mergedParseOptions.sourceType ??= "unambiguous";
  const ast = parse(code, mergedParseOptions);
  if (ast?.errors?.length) {
    Logger.extend("parse")("Errors", ast.errors);
  }

  patch(state);

  const getByteSize = (str: string) => new Blob([str]).size;
  const log = Logger.extend("generate");

  const steps: {
    name: keyof typeof generate;
    fn: (state: TransformPipelineState) => string;
  }[] = [
    { name: "formatted", fn: formattedFn },
    { name: "minified", fn: minifiedFn },
    { name: "compressed", fn: compressedFn },
    { name: "userscript", fn: userscriptFn },
  ];

  for (const step of steps) {
    log(`${step.name} started`);
    const output = step.fn(state);
    const byteSize = prettyBytes(getByteSize(output));
    log(`${step.name} finished with ${byteSize} in string output size`);
  }

  return state;
}
