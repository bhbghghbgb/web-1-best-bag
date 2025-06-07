import * as t from '@babel/types'
import * as m from '@codemod/matchers'

export function notEqualExpression(
  left: m.Matcher<t.Expression | t.PrivateName>,
  right: m.Matcher<t.Expression>,
) {
  const notEqual = m.binaryExpression(m.or('!=', '!=='), left, right)

  return notEqual
}

export function chainedAndNotEquals(left: m.Matcher<t.Expression>, right: m.Matcher<t.Expression>) {
  const leaf = notEqualExpression(left, right)
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

export function notOrMultiNotEquals(
  expression: m.Matcher<t.Expression>,
  right: m.Matcher<t.Expression>,
): m.Matcher<t.LogicalExpression> {
  let capturedExpression: m.CapturedMatcher<t.Expression>

  const falsyOr = m.logicalExpression(
    '||',
    m.unaryExpression('!', (capturedExpression = m.capture(expression))),
    chainedAndNotEquals(m.fromCapture(capturedExpression), right), // Enforce same expression
  )

  return falsyOr
}

/**
 * Creates a matcher for a BlockStatement that contains a contiguous sequence
 * of statements matching the provided matchers.
 *
 * A subarray is a **continuous** portion of an array, meaning the matched statements
 * must appear consecutively in the block statement body.
 *
 * @param matchers - An array of matchers for the statements to match in sequence.
 * @returns A matcher for the BlockStatement node.
 */
export function blockStatementSubarray(
  matchers: m.Matcher<t.Statement>[],
): m.Matcher<t.BlockStatement> {
  return m.matcher((node): node is t.BlockStatement => {
    if (!m.blockStatement().match(node)) {
      return false
    }

    const { body } = node

    if (body.length < matchers.length) {
      return false
    }

    // Sliding window approach: Check every possible contiguous slice in the body
    return body.some(
      (_, i) =>
        i <= body.length - matchers.length &&
        matchers.every((matcher, j) => matcher.match(body[i + j])),
    )
  })
}

/**
 * Creates a matcher for a BlockStatement that contains a sequence of statements
 * matching the provided matchers in order, allowing for gaps between them.
 *
 * A subsequence allows elements to appear **in order**, but they **do not** need
 * to be adjacent. This means we scan the block statement body while checking
 * for each matcher in sequence.
 *
 * @param matchers - An array of matchers for the statements to match in order.
 * @returns A matcher for the BlockStatement node.
 */
export function blockStatementSubsequence(
  matchers: m.Matcher<t.Statement>[],
): m.Matcher<t.BlockStatement> {
  return m.matcher((node): node is t.BlockStatement => {
    if (!m.blockStatement().match(node)) {
      return false
    }

    const { body } = node
    let matcherIndex = 0 // Index for tracking matchers

    // Iterate through body while checking matchers in order
    for (const stmt of body) {
      if (matchers[matcherIndex].match(stmt)) {
        matcherIndex++ // Move to next matcher
        if (matcherIndex === matchers.length) {
          return true // Successfully matched all
        }
      }
    }

    return false // Not all matchers were found in order
  })
}

/**
 * Creates a matcher for a BlockStatement that contains all statements
 * matching the provided matchers, regardless of order.
 *
 * A subset means **all elements must be present**, but they can appear **in any order**.
 * We track matchers using a Set and remove matched items progressively.
 *
 * @param matchers - An array of matchers for the statements to match.
 * @returns A matcher for the BlockStatement node.
 */
export function blockStatementSubset(
  matchers: m.Matcher<t.Statement>[],
): m.Matcher<t.BlockStatement> {
  return m.matcher((node): node is t.BlockStatement => {
    if (!m.blockStatement().match(node)) {
      return false
    }

    const { body } = node
    const remainingMatchers = new Set(matchers) // Use Set for efficiency

    for (const stmt of body) {
      for (const matcher of remainingMatchers) {
        if (matcher.match(stmt)) {
          remainingMatchers.delete(matcher) // Remove matched matcher
          break
        }
      }
    }

    return remainingMatchers.size === 0 // True if all matchers were found
  })
}

/**
 * Matches a variable declaration with exactly one declarator
 */
export function singleVariableDeclaration(
  kind: Parameters<typeof m.variableDeclaration>[0],
  id?: m.Matcher<t.LVal>,
  init?: m.Matcher<t.Expression> | null,
): m.Matcher<t.VariableDeclaration> {
  return m.variableDeclaration(kind, [m.variableDeclarator(id, init)])
}

/**
 * Matches a for statement with specific test operator
 */
export function forStatementWithTestOperator(
  operator: Parameters<typeof m.binaryExpression>[0],
): m.Matcher<t.ForStatement> {
  return m.forStatement(
    m.anyExpression(),
    m.binaryExpression(operator),
    m.anyExpression(),
    m.anyStatement(),
  )
}
