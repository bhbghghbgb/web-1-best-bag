import { translate } from "./wheel.rig.js";
import { readFileSync, writeFileSync } from "fs";
const wheelDeobJs = readFileSync("./wheel.deob.js", { encoding: "utf-8" });
const wheelPatchJs = readFileSync("./wheel.patch.js", { encoding: "utf-8" });
const wheelPatch2Js = readFileSync("./wheel.patch2.js", { encoding: "utf-8" });
const wheelPatch3Js = readFileSync("./wheel.patch3.js", { encoding: "utf-8" });
const wheelScripter = readFileSync("./wheel.userscripter.js", {
  encoding: "utf-8",
});
const { sourceComplete, sourceCompleteObfuscated, sourceUserScriptComplete } =
  translate(
    wheelDeobJs,
    wheelPatchJs,
    wheelPatch2Js,
    wheelPatch3Js,
    wheelScripter,
    // ["Mai", "Hương", "Giang"]
    ["Tuyền"]
  );
writeFileSync("./public/wheel.replace.js", sourceComplete, { encoding: "utf-8" });
writeFileSync("./public/wheel.complete.js", sourceCompleteObfuscated, {
  encoding: "utf-8",
});
writeFileSync("./public/wheel.userscript.js", sourceUserScriptComplete, {
  encoding: "utf-8",
});
