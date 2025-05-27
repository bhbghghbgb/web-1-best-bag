import * as t from '@babel/types'
import * as m from '@codemod/matchers'

export function notEqualExpression(
  left: m.Matcher<t.Expression | t.PrivateName>,
  right: m.Matcher<t.Expression>,
) {
  const notEqual = m.binaryExpression(m.or('!=', '!=='), left, right)

  return notEqual
}

export function chainedAndNotEqualsAny(left: m.Matcher<t.Expression>) {
  const leaf = notEqualExpression(left, m.anyExpression())
  const branch = m.logicalExpression('&&', m.or(leaf, m.logicalExpression()), leaf)

  const chainedAnds: m.Matcher<t.BinaryExpression | t.LogicalExpression> = m.matcher(
    (exp): boolean => {
      if (leaf.match(exp)) {
        return true
      }
      if (branch.match(exp)) {
        return chainedAnds.match(exp.left)
      }
      return false
    },
  )

  return chainedAnds
}

export function notOrMultiNotEqualsAny(
  expression: m.Matcher<t.Expression>,
): m.Matcher<t.LogicalExpression> {
  let capturedExpression: m.CapturedMatcher<t.Expression>

  const falsyOr = m.logicalExpression(
    '||',
    m.unaryExpression('!', (capturedExpression = m.capture(expression))),
    chainedAndNotEqualsAny(m.fromCapture(capturedExpression)), // Enforce same expression
  )

  return falsyOr
}
