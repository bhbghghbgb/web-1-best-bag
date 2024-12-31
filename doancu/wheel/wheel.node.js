import { translate } from "./wheel.rig.js";
import { readFileSync, writeFileSync } from "fs";
const wheelDeobJs = readFileSync("./wheel.deob.js", { encoding: "utf-8" });
const wheelPatchJs = readFileSync("./wheel.patch.js", { encoding: "utf-8" });
const wheelPatch2Js = readFileSync("./wheel.patch2.js", { encoding: "utf-8" });
const { sourceComplete, sourceCompleteObfuscated } = translate(
  wheelDeobJs,
  wheelPatchJs,
  wheelPatch2Js,
  // ["Mai", "Hương", "Giang"]
  ["Tuyền"]
);
writeFileSync("./wheel.replace.js", sourceComplete, { encoding: "utf-8" });
writeFileSync("./wheel.complete.js", sourceCompleteObfuscated, {
  encoding: "utf-8",
});
