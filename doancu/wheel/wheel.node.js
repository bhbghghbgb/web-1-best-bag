import { translate } from "./wheel.rig.js";
import { readFileSync, writeFileSync } from "fs";
const wheelMinJs = readFileSync("./wheel.min.js", { encoding: "utf-8" });
const wheelPatchJs = readFileSync("./wheel.patch.js", { encoding: "utf-8" });
const { sourceReplace, sourceComplete } = translate(wheelMinJs, wheelPatchJs);
writeFileSync("./wheel.replace.js", sourceReplace, { encoding: "utf-8" });
writeFileSync("./wheel.complete.js", sourceComplete, { encoding: "utf-8" });
