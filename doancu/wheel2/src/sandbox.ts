import {
  QuickJSWASMModule,
  newQuickJSWASMModuleFromVariant,
  newVariant,
  shouldInterruptAfterDeadline,
} from "quickjs-emscripten-core";
import QUICKJS_RELEASE_SYNC from "@jitl/quickjs-wasmfile-release-sync";
import QUICKJS_WASM_LOCATION from "@jitl/quickjs-wasmfile-release-sync/wasm?url";

let JsSanbox: QuickJSWASMModule | null = null;

export async function safeEval(code: string) {
  console.debug("[sandbox] safeEval, lazy loading sandbox core now", code);
  if (JsSanbox == null) {
    JsSanbox = await newQuickJSWASMModuleFromVariant(
      newVariant(QUICKJS_RELEASE_SYNC, {
        wasmLocation: QUICKJS_WASM_LOCATION,
      })
    );
  }
  const result = JsSanbox.evalCode(code, {
    shouldInterrupt: shouldInterruptAfterDeadline(Date.now() + 1000),
    memoryLimitBytes: 1024 * 1024 * 1024,
  });
  console.debug("[sandbox] eval result", result);
  return result;
}
