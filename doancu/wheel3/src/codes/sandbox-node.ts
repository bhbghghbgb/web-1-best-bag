// import Sandbox from '@nyariv/sandboxjs'
// import { isNode } from 'browser-or-node'
// import debug from 'debug'

// let JsSandbox: Sandbox | undefined

// export async function safeEvalNode(code: string) {
//   if (!isNode) {
//     throw new Error('safeEvalNode should only be used in Node.js environment.')
//   }

//   const log = debug('sandbox-node')

//   if (JsSandbox === undefined) {
//     log('Initializing SandboxJS...')
//     JsSandbox = new Sandbox()
//     // JsSandbox = new Sandbox({
//     //   audit: false,
//     //   forbidFunctionCalls: false,
//     //   forbidFunctionCreation: false,
//     //   globals: {},
//     //   prototypeWhitelist: new Map([[Array, new Set(['push', 'shift'])]]),
//     // })
//     log('SandboxJS initialized.')
//   }

//   log('Evaluation started.')
//   const exec = JsSandbox.compile(`return ${co}`)
//   const result = exec().run() // result: "hello world"
//   // const test = JsSandbox?.compile('"heelo world"')?.().run()
//   // const result = await JsSandbox?.compileAsync(code)?.().run()
//   log('Evaluation finished.')

//   return result
// }
