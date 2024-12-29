import { translate } from "./wheel.rig.js";
import { readFileSync, writeFileSync } from "fs";
const wheelMinJs = readFileSync("./wheel.min.js", { encoding: "utf-8" });
const wheelPatchJs = readFileSync("./wheel.patch.js", { encoding: "utf-8" });
const { sourceComplete, sourceCompleteObfuscated } = translate(
  wheelMinJs,
  wheelPatchJs,
  ["Mai", "Hương", "Giang"]
);
writeFileSync("./wheel.replace.js", sourceComplete, { encoding: "utf-8" });
writeFileSync("./wheel.complete.js", sourceCompleteObfuscated, {
  encoding: "utf-8",
});
