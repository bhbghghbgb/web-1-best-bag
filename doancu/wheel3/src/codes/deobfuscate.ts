import { WEBCRACK_OPTIONS } from '@/codes/options'
import { safeEvalBrowser } from '@/codes/sandbox'
import { webcrack, type Sandbox } from 'webcrack'

/**
 * Runs WebCrack to deobfuscate JavaScript.
 * @param code - Obfuscated JavaScript code.
 * @returns Deobfuscated code string.
 */
export async function deobfuscateCode(code: string, sandbox?: Sandbox): Promise<string> {
  const result = await webcrack(code, {
    ...WEBCRACK_OPTIONS,
    sandbox: sandbox ?? safeEvalBrowser,
  })

  return result.code
}
