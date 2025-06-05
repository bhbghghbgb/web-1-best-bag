import { translate } from "./wheel.rig.js";
import { readFileSync, writeFileSync } from "fs";

console.log("[wheel.node.js] building demo output");
console.log("Reading files");
const wheelDeobJs = readFileSync("public/wheel.deob.js", { encoding: "utf-8" });
const wheelPatchJs = readFileSync("public/wheel.patch.js", {
  encoding: "utf-8",
});
const wheelPatch2Js = readFileSync("public/wheel.patch2.js", {
  encoding: "utf-8",
});
const wheelPatch3Js = readFileSync("public/wheel.patch3.js", {
  encoding: "utf-8",
});
const wheelScripter = readFileSync("public/wheel.userscripter.js", {
  encoding: "utf-8",
});
console.log("Translating");
const { sourceComplete, sourceCompleteObfuscated, sourceUserScriptComplete } =
  translate(
    wheelDeobJs,
    wheelPatchJs,
    wheelPatch2Js,
    wheelPatch3Js,
    wheelScripter,
    ["Mai", "Hương", "Giang"]
    // ["Tuyền"]
  );
console.log("Writing result files");
writeFileSync("dist/wheel.replace.js", sourceComplete, { encoding: "utf-8" });
writeFileSync("dist/wheel.complete.js", sourceCompleteObfuscated, {
  encoding: "utf-8",
});
writeFileSync("dist/wheel.userscripted.js", sourceUserScriptComplete, {
  encoding: "utf-8",
});
console.log("Complete");
