import _generate from '@babel/generator'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
import type { Identifier } from '@babel/types'
import {
  capture,
  CapturedMatcher,
  identifier,
  ifStatement,
  logicalExpression,
  match,
  unaryExpression,
} from '@codemod/matchers'

// @ts-expect-error https://github.com/babel/babel/issues/13855
const traverse: typeof _traverse = _traverse.default
// @ts-expect-error https://github.com/babel/babel/discussions/14815
const generate: typeof _generate = _generate.default

export function patchHostnameRedirection() {
  const ast = parse(
    "if (!rt || rt != b64DecodeUnicode('<a link\\'s b64>') && rt != b64DecodeUnicode('another link\\'s b64')) {\nwindow.location.href = b64DecodeUnicode('another link\\'s b64');\n}",
  )
  let currentHostnameIdentifier: CapturedMatcher<Identifier>
  const ifcheck = ifStatement(
    logicalExpression(
      '||',
      unaryExpression('!', (currentHostnameIdentifier = capture(identifier()))),
    ),
  )
  traverse(ast, {
    IfStatement(path) {
      match(ifcheck, { id: currentHostnameIdentifier }, path.node, ({ id }) => {
        console.log(generate(path.node))
        console.log(id)
      })
    },
  })
}

patchHostnameRedirection()
