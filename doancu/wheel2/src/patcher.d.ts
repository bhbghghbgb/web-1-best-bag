/**
 *
 * @param {string} deobfuscatedSource
 * @param {string} clairvoyancePatch
 * @param {string} snapPatch
 * @param {string} reinitPatch
 * @param {string} scripterTemplate
 * @param {string[]} riggingValues
 * @returns {Promise<{patchedAsSource: string, patchedAsUserscript: string}>}
 */
export function translate(deobfuscatedSource: string, clairvoyancePatch: string, snapPatch: string, reinitPatch: string, scripterTemplate: string, riggingValues: string[]): Promise<{
    patchedAsSource: string;
    patchedAsUserscript: string;
}>;
