import { isBrowser, isNode } from 'browser-or-node'
import debug from 'debug'
import { shouldInterruptAfterDeadline, type QuickJSWASMModule } from 'quickjs-emscripten-core'

const logBrowser = debug('sandbox-browser')
const logNode = debug('sandbox-node')

let JsSandboxBrowser: QuickJSWASMModule | undefined
let JsSandboxNode: QuickJSWASMModule | undefined

/**
 * Dynamically loads QuickJS for browser and evaluates the given code.
 * Uses lazy loading to prevent unnecessary bundling.
 */
export async function safeEvalBrowser(code: string) {
  if (!isBrowser) {
    throw new Error('safeEvalBrowser should only be used in a browser.')
  }

  if (JsSandboxBrowser === undefined) {
    logBrowser('Lazy loading QuickJS WASM started')

    const { QuickJSWASMModule, newQuickJSWASMModuleFromVariant, newVariant } = await import(
      'quickjs-emscripten-core'
    )
    const QUICKJS_RELEASE_SYNC = (await import('@jitl/quickjs-wasmfile-release-sync')).default
    const QUICKJS_WASM_LOCATION = (await import('@jitl/quickjs-wasmfile-release-sync/wasm?url'))
      .default

    JsSandboxBrowser = await newQuickJSWASMModuleFromVariant(
      newVariant(QUICKJS_RELEASE_SYNC, { wasmLocation: QUICKJS_WASM_LOCATION }),
    )

    logBrowser('QuickJS WASM loaded successfully')
  }

  logBrowser('Evaluation started')
  const result = JsSandboxBrowser.evalCode(code, {
    shouldInterrupt: shouldInterruptAfterDeadline(Date.now() + 1000),
    memoryLimitBytes: 1024 * 1024 * 1024,
  })
  logBrowser('Evaluation finished')

  return result
}

/**
 * Uses QuickJS for Node.js without requiring manual WASM resolution.
 * Ensures safe execution with memory limits.
 */
export async function safeEvalNode(code: string) {
  if (!isNode) {
    throw new Error('safeEvalNode should only be used in Node.js.')
  }

  if (JsSandboxNode === undefined) {
    logNode('Initializing QuickJS for Node.js')

    const { newQuickJSWASMModule, RELEASE_SYNC } = await import('quickjs-emscripten')

    JsSandboxNode = await newQuickJSWASMModule(RELEASE_SYNC)
    logNode('QuickJS initialized successfully')
  }

  logNode('Evaluation started')
  const result = JsSandboxNode.evalCode(code, {
    shouldInterrupt: shouldInterruptAfterDeadline(Date.now() + 1000),
    memoryLimitBytes: 1024 * 1024 * 1024,
  })
  logNode('Evaluation finished')

  return result
}
