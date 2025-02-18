// test dynamic import chunk split, require internet when first time click submit
// to download the remaining of the library

export async function deobfuscateCode(code: string) {
  console.debug("[deobfuscateCode] lazy loading deobfuscator and sandbox");
  const [{ webcrack }, { safeEval }] = await Promise.all([
    import("webcrack"),
    import("./sandbox"),
  ]);
  return (
    await webcrack(code, {
      jsx: false,
      unpack: false,
      unminify: true,
      deobfuscate: true,
      mangle: (id) => id.startsWith("_0x"),
      sandbox: safeEval,
    })
  ).code;
}
