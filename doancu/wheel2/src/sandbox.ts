import QUICKJS_RELEASE_SYNC from "@jitl/quickjs-wasmfile-release-sync";
import QUICKJS_WASM_LOCATION from "@jitl/quickjs-wasmfile-release-sync/wasm?url";
import {
  newQuickJSWASMModuleFromVariant,
  newVariant,
  shouldInterruptAfterDeadline,
} from "quickjs-emscripten-core";
const JsSanbox = await newQuickJSWASMModuleFromVariant(
  newVariant(QUICKJS_RELEASE_SYNC, {
    wasmLocation: QUICKJS_WASM_LOCATION,
  })
);
export async function safeEval(code: string) {
  console.debug("[sandbox] safeEval", code);
  return JsSanbox.evalCode(code, {
    shouldInterrupt: shouldInterruptAfterDeadline(Date.now() + 1000),
    memoryLimitBytes: 1024 * 1024 * 1024,
  });
}
