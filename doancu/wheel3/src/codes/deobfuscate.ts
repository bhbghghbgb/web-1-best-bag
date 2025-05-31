import { safeEvalBrowser } from '@/codes/sandbox-browser'
import { webcrack, type Sandbox } from 'webcrack'

/**
 * Runs WebCrack to deobfuscate JavaScript.
 * @param code - Obfuscated JavaScript code.
 * @returns Deobfuscated code string.
 */
export async function deobfuscateCode(code: string, sandbox?: Sandbox): Promise<string> {
  const result = await webcrack(code, {
    jsx: false,
    unpack: false,
    unminify: true,
    deobfuscate: true,
    mangle: (id) => id.length <= 2 || id.startsWith('_0x'),
    sandbox: sandbox ?? safeEvalBrowser,
  })

  return result.code
}
