import { safeEval } from '@/codes/sandbox'
import { webcrack } from 'webcrack'

/**
 * Runs WebCrack to deobfuscate JavaScript.
 * @param code - Obfuscated JavaScript code.
 * @param env - Execution environment, either 'browser' or 'node'.
 * @returns Deobfuscated code string.
 */
export async function deobfuscateCode(code: string): Promise<string> {
  const result = await webcrack(code, {
    jsx: false,
    unpack: false,
    unminify: true,
    deobfuscate: true,
    mangle: (id) => id.length <= 2 || id.startsWith('_0x'),
    sandbox: safeEval,
  })

  return result.code
}
