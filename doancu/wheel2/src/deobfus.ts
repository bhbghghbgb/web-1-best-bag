import { webcrack } from "webcrack";
import { safeEval } from "./sandbox";

export async function deobfuscateCode(code: string) {
  return (
    await webcrack(code, {
      jsx: false,
      unpack: false,
      unminify: true,
      deobfuscate: true,
      mangle: (id) => id.startsWith("_0x"),
      sandbox: safeEval,
    })
  ).code;
}
