import { readFileSync, writeFileSync } from "fs";
import { minify } from "terser";
import jsesc from "jsesc";

let sourceForUserScriptInject = readFileSync(
  "./public/index-v347-p.js"
).toString();

const sourceForUserScriptInjectMinified = await minify(
  sourceForUserScriptInject,
  { ecma: 2022 }
);
const sourceForUserScriptInjectEscaped = jsesc(
  sourceForUserScriptInjectMinified.code,
  { wrap: true, minimal: true }
);

writeFileSync("./test.js", sourceForUserScriptInjectEscaped);
