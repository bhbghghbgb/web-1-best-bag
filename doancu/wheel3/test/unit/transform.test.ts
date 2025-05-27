import traverse from '@babel/traverse'
import { describe, expect, test } from 'vitest'
import {
  pipelineCompress,
  pipelineMinify,
  pipelineToFormatted,
  pipelineUserscript,
  transform,
  type TransformPipelineState,
} from '@/codes/transform'

describe('transform function', () => {
  test('babel parse/traverse and default transformers', async () => {
    const code = '// some code...\nconst x = 42;\nconsole.log(x);' // Test input

    const patch = (state: TransformPipelineState) => {
      const { node } = state
      if (!node) {
        throw new Error('babel parse failed')
      }
      traverse(node, {
        NumericLiteral(path) {
          if (path.node.value === 42) {
            path.node.value = 69
          }
        },
      })
    }

    const params = {
      code,
      parserOptions: {}, // Provide minimal parser options
      patch,
      generate: {
        formatted: (state: TransformPipelineState) => pipelineToFormatted(state),
        minified: (state: TransformPipelineState) => pipelineMinify(state),
        compressed: (state: TransformPipelineState) => pipelineCompress(state),
        userscript: (state: TransformPipelineState) => pipelineUserscript(state),
      },
    }

    const result = await transform(params)

    expect(result).toMatchObject({
      formatted: 'const x = 69;\nconsole.log(x);',
      minified: 'const x=69;console.log(x);',
      compressed: 'ᣣ氽䆼̀Ƞ砷䁖Ř܅ቀ۠匡槑Y䀪ᰢ⣲  ',
      userscript: expect.stringContaining(
        "inject.appendChild(document.createTextNode(LZString.decompressFromUTF16('ᣣ氽䆼̀Ƞ砷䁖Ř܅ቀ۠匡槑Y䀪ᰢ⣲  ')));\n",
      ),
    })
  })
})
