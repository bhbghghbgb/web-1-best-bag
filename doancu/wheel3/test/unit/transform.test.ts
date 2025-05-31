import {
  defaultLinter,
  defaultPrettier,
  transform,
  type TransformPipelineState,
} from '@/codes/transform'
import traverse from '@babel/traverse'
import { cloneNode } from '@babel/types'
import { compressToUTF16 } from 'lz-string'
import { describe, expect, test } from 'vitest'

describe('transformers and patchers', () => {
  test('default deob, babel parse/traverse, prettier, eslint and transformers', async () => {
    const code = '/* some code... */ const x = 420;if(x===69)console.log(x);//more code' // Test input

    const patch = (state: TransformPipelineState) => {
      const { parsed } = state
      if (!parsed) {
        throw new Error('babel parse failed')
      }
      const patched = cloneNode(parsed, true, false)
      traverse(patched, {
        NumericLiteral(path) {
          if (path.node.value === 420) {
            path.node.value = 69
          }
        },
      })
      return patched
    }

    const result = await transform({ code, patch })
    // code is not obsfucated, webcrack will not need sandbox

    let minifiedOutput: string
    let compressedOutput: string

    expect(result).toHaveProperty('patched.program.body[0].declarations[0].init.value', 69)
    expect(result).toHaveProperty('parsed.program.body[0].declarations[0].init.value', 420)
    expect(result).toMatchObject({
      code,
      deobfuscated: `/* some code... */const v = 420;
if (v === 69) {
  console.log(v);
} //more code`,
      linted: `/* Some code... */const v = 420;
if (v === 69) {
  console.log(v);
} //More code`,
      parsed: expect.objectContaining({ type: 'File' }),
      patched: expect.objectContaining({ type: 'File' }),
      generated: `const v = 69;
if (v === 69) {
  console.log(v);
}`,
      generatedFormatted: `const v = 69;
if (v === 69) {
  console.log(v);
}
`,
      minified: (minifiedOutput = 'const v=69;console.log(v);'),
      compressed: (compressedOutput = compressToUTF16(minifiedOutput)),
      escaped: compressedOutput,
      userscript: expect.stringContaining(
        `inject.appendChild(document.createTextNode(LZString.decompressFromUTF16('${compressedOutput}')));\n`,
      ),
    })
  })
  // test('defaultDeobfuscator: webcrack', async () => {
  //   const code =
  //     "function w(){var R=['1194777DCSFKp','7508LeSMGe','57nyGxbT','1837NyvKov','292515JluaDA'," +
  //     "'399334LkFEyA','1403478wVEtox','Hello\x20World!','1442HQRmWZ','log','2488eBNTXE'];w=function()" +
  //     '{return R;};return w();}(function(i,J){var L=U,n=i();while(!![]){try{var x=parseInt(L(0xea))/0x1+' +
  //     'parseInt(L(0xec))/0x2+parseInt(L(0xe9))/0x3*(parseInt(L(0xe8))/0x4)+parseInt(L(0xeb))/0x5+-' +
  //     'parseInt(L(0xed))/0x6+parseInt(L(0xe4))/0x7*(-parseInt(L(0xe6))/0x8)+parseInt(L(0xe7))/0x9;if(x===J)' +
  //     "break;else n['push'](n['shift']());}catch(l){n['push'](n['shift']());}}}(w,0x1fd8c));function xinchao()" +
  //     '{var Z=U;console[Z(0xe5)](Z(0xe3));}function U(i,J){var n=w();return U=function(x,l){x=x-0xe3;' +
  //     'var L=n[x];return L;},U(i,J);}xinchao();'
  //   const result = await deobfuscateCode(code, safeEvalNode)
  //   expect(result).toEqual('')
  // })
  test('defaultLinter: eslint.configs.all', async () => {
    const code = 'a = a ?? b ?? c'
    const result = await defaultLinter(code)
    expect(result).toEqual('a ??= b ?? c')
  })
  test('defaultFormatter: prettier-plugin-curly', async () => {
    const code = 'if (2) 1\nelse 2'
    const result = await defaultPrettier(code)
    expect(result).toEqual('if (2) {\n  1;\n} else {\n  2;\n}\n')
  })
})
