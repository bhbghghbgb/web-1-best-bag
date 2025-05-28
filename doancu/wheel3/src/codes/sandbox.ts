import QUICKJS_RELEASE_SYNC from '@jitl/quickjs-wasmfile-release-sync'
import QUICKJS_WASM_LOCATION from '@jitl/quickjs-wasmfile-release-sync/wasm?url'
import {
  QuickJSWASMModule,
  newQuickJSWASMModuleFromVariant,
  newVariant,
  shouldInterruptAfterDeadline,
} from 'quickjs-emscripten-core'

import { isBrowser, isNode } from 'browser-or-node'
import debug from 'debug'

let JsSandbox: QuickJSWASMModule | null = null

export async function safeEval(code: string) {
  if (!isBrowser && !isNode) {
    throw new Error('Unknown environment to run sandbox')
  }
  const log = debug('sandbox')
  if (JsSandbox == null) {
    log('lazy loading quickjs wasm started')
    JsSandbox = await newQuickJSWASMModuleFromVariant(
      newVariant(QUICKJS_RELEASE_SYNC, {
        wasmLocation: QUICKJS_WASM_LOCATION,
      }),
    )
    log('quickjs loaded finished')
  }
  log('evalulation started')
  const result = JsSandbox.evalCode(code, {
    shouldInterrupt: shouldInterruptAfterDeadline(Date.now() + 1000),
    memoryLimitBytes: 1024 * 1024 * 1024,
  })
  log('evalulation finished')
  return result
}
