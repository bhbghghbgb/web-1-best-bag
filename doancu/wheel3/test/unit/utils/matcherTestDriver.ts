import generate from '@babel/generator'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import * as m from '@codemod/matchers'

/**
 * Generic test driver for matchers.
 * @param {string} code - JavaScript source code to parse.
 * @param {m.Matcher<unknown>} matcher - The matcher to test against AST nodes.
 * @returns {Array<string>} - List of matched nodes as generated code strings.
 */
export function runMatcherTest(code: string, matcher: m.Matcher<unknown>): Array<string> {
  const ast = parse(code, { sourceType: 'module' })
  const matchedNodes: string[] = []

  traverse(ast, {
    enter(path) {
      if (matcher.match(path.node)) {
        matchedNodes.push(generate(path.node).code)
      }
    },
  })

  return matchedNodes
}
