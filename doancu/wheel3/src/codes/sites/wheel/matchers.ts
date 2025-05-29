import * as t from '@babel/types'
import * as m from '@codemod/matchers'
import * as r from '@/codes/matchers'

export function loadWheelFunction() {
  // Captures for reusable identifiers
  const capturedVar = m.capture(m.identifier())
  const capturedFunc = m.capture(m.identifier())

  // Matcher for the initial variable declaration assigned by a function call
  const initialVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(capturedVar, m.callExpression(capturedFunc, [])),
  ])

  // Matcher for the if statement checking if the variable is null and returning false
  const nullCheckIfStmt = m.ifStatement(
    m.binaryExpression('==', m.fromCapture(capturedVar), m.nullLiteral()),
    m.blockStatement([m.returnStatement(m.booleanLiteral(false))]),
  )

  // Matcher for variable declaration assigned by variable.entries
  const entriesVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(
      m.identifier(),
      m.memberExpression(m.fromCapture(capturedVar), m.identifier('entries')),
    ),
  ])

  // Matcher for variable declaration assigned by variable.duration
  const durationVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(
      m.identifier(),
      m.memberExpression(m.fromCapture(capturedVar), m.identifier('duration')),
    ),
  ])

  // Final matcher for the function declaration
  const functionMatcher = m.functionDeclaration(
    m.identifier(),
    m.anyList(),
    r.blockStatementSubsequence([initialVarDecl, nullCheckIfStmt, entriesVarDecl, durationVarDecl]),
    false,
    true,
  )

  return functionMatcher
}
