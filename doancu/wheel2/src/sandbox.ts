import { QuickJSWASMModule } from "quickjs-emscripten-core";

let JsSanbox: QuickJSWASMModule | null = null;

// test dynamic import chunk split, require internet when first time click submit
// to download the remaining of the library

export async function safeEval(code: string) {
  console.debug("[sandbox] safeEval, lazy loading sandbox core now", code);
  const [
    { default: QUICKJS_RELEASE_SYNC },
    { default: QUICKJS_WASM_LOCATION },
    {
      newQuickJSWASMModuleFromVariant,
      newVariant,
      shouldInterruptAfterDeadline,
    },
  ] = await Promise.all([
    import("@jitl/quickjs-wasmfile-release-sync"),
    import("@jitl/quickjs-wasmfile-release-sync/wasm?url"),
    import("quickjs-emscripten-core"),
  ]);
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
