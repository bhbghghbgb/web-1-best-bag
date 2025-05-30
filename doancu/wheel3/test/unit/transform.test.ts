import { defaultFormatter, transform, type TransformPipelineState } from '@/codes/transform'
import traverse from '@babel/traverse'
import { cloneNode } from '@babel/types'
import debug from 'debug'
import { compressToUTF16 } from 'lz-string'
import { describe, expect, test } from 'vitest'

describe('transformers and patchers', () => {
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
      formatted: `/* some code... */ const v = 420;
if (v === 69) {
  console.log(v);
} //more code
`,
      parsed: expect.objectContaining({ type: 'File' }),
      patched: expect.objectContaining({ type: 'File' }),
      generated: `const v = 69;
if (v === 69) {
  console.log(v);
}`,
      minified: (minifiedOutput = 'const v=69;console.log(v);'),
      compressed: (compressedOutput = compressToUTF16(minifiedOutput)),
      escaped: compressedOutput,
      userscript: expect.stringContaining(
        `inject.appendChild(document.createTextNode(LZString.decompressFromUTF16('${compressedOutput}')));\n`,
      ),
    })
  })
  test('prettier-plugin-curly', async () => {
    const code = `if (2) 1\nelse 2`

    const result = await defaultFormatter(code)

    expect(result).toEqual(`if (2) {\n  1;\n} else {\n  2;\n}\n`)
  })
})
