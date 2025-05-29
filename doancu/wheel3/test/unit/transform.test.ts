import { transform, type TransformParams, type TransformPipelineState } from '@/codes/transform'
import traverse from '@babel/traverse'
import { cloneNode } from '@babel/types'
import { describe, expect, test } from 'vitest'

describe('transform function', () => {
  test('default deob, babel parse/traverse and transformers', async () => {
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

    expect(result).toMatchObject({
      code,
      deobfuscated: `/* some code... */const x = 420;
if (x === 69) {
  console.log(x);
} //more code`,
      formatted: `/* some code... */ const x = 420;
if (x === 69) {
  console.log(x);
} //more code
`,
      parsed: expect.objectContaining({ type: 'File' }),
      patched: expect.objectContaining({ type: 'File' }),
      generated: `const x = 69;
if (x === 69) {
  console.log(x);
}`,
      minified: 'const x=69;console.log(x);',
      compressed: 'ᣣ氽䆼̀Ƞ磠常۠✡尢䀲恓ఠ⠴⪊㐤僠ᯫ౒䒤VŬǳᤠ㧑ௐؒ  ',
      escaped: 'ᣣ氽䆼̀Ƞ磠常۠✡尢䀲恓ఠ⠴⪊㐤僠ᯫ౒䒤VŬǳᤠ㧑ௐؒ  ',
      userscript: expect.stringContaining(
        "inject.appendChild(document.createTextNode(LZString.decompressFromUTF16('ᣣ氽䆼̀Ƞ磠常۠✡尢䀲恓ఠ⠴⪊㐤僠ᯫ౒䒤VŬǳᤠ㧑ௐؒ  ')));\n",
      ),
    })
    expect(result).toHaveProperty('parsed.program.body[0].declarations[0].init.value', 420)
    expect(result).toHaveProperty('patched.program.body[0].declarations[0].init.value', 69)
  })
})
