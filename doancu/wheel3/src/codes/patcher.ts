import _generate from '@babel/generator'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
import * as t from '@babel/types'
import * as m from '@codemod/matchers'
import * as r from './matchers'

// @ts-expect-error https://github.com/babel/babel/issues/13855
const traverse: typeof _traverse = _traverse.default
// @ts-expect-error https://github.com/babel/babel/discussions/14815
const generate: typeof _generate = _generate.default

export function patchHostnameRedirection() {
  let currentHostnameId: m.CapturedMatcher<t.Identifier>

  // Match the chained && conditions: rt != someValue
  const ast = parse(
    "if (!rt || rt != b64DecodeUnicode('<a link\\'s b64>') && rt != b64DecodeUnicode('another link\\'s b64')) {\nwindow.location.href = b64DecodeUnicode('another link\\'s b64');\n}",
  )
  // let currentHostnameId: m.CapturedMatcher<Identifier>
  const ifcheck = m.ifStatement(
    m.logicalExpression(
      '||',
      m.unaryExpression('!', (currentHostnameId = m.capture(m.identifier()))),
    ),
  )
  traverse(ast, {
    IfStatement(path) {
      m.match(ifcheck, { id: currentHostnameId }, path.node, ({ id }) => {
        console.log(generate(path.node))
        console.log(id)
      })
    },
  })
}

patchHostnameRedirection()
