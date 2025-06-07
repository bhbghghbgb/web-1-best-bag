import type { Locator } from '@/codes/locator'
import * as r from '@/codes/matchers'
import * as t from '@babel/types'
import * as m from '@codemod/matchers'

function locateLoadWheelFunction(): Locator<t.FunctionDeclaration> & {
  funcId: m.CapturedMatcher<t.Identifier, t.Identifier>
  varId: m.CapturedMatcher<t.Identifier, t.Identifier>
} {
  // Captures for reusable identifiers
  const funcId = m.capture(m.identifier())
  const varId = m.capture(m.identifier())

  // Matcher for the initial variable declaration assigned by a function call
  const initialVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(varId, m.callExpression()),
  ])

  // Matcher for the if statement checking if the variable is null and returning false
  const nullCheckIfStmt = m.ifStatement(
    m.binaryExpression('==', m.fromCapture(varId), m.nullLiteral()),
    m.blockStatement([m.returnStatement(m.booleanLiteral(false))]),
  )

  // Matcher for variable declaration assigned by variable.entries
  const entriesVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(
      m.identifier(),
      m.memberExpression(m.fromCapture(varId), m.identifier('entries')),
    ),
  ])

  // Matcher for variable declaration assigned by variable.duration
  const durationVarDecl = m.variableDeclaration('var', [
    m.variableDeclarator(
      m.identifier(),
      m.memberExpression(m.fromCapture(varId), m.identifier('duration')),
    ),
  ])

  // Final matcher for the function declaration
  const functionMatcher = m.functionDeclaration(
    funcId,
    m.anyList(),
    r.blockStatementSubsequence([initialVarDecl, nullCheckIfStmt, entriesVarDecl, durationVarDecl]),
    false,
    true,
  )

  return { matcher: functionMatcher, funcId, varId }
}

// const calcCurrentSectorIndex = () => {
//   let rotationAccum = 0
//   for (let i = 0; i < sectorAngles.length; i++) {
//     rotationAccum += sectorAngles[i]
//     if (Math.abs(currentAngle) < rotationAccum) {
//       return i
//     }
//   }
//   return 0
// }
function locateCalcCurrentSectorIndex(): Locator<t.VariableDeclaration> & {
  funcId: m.CapturedMatcher<t.Identifier, t.Identifier>
  sectorAngleVar: m.CapturedMatcher<t.Identifier, t.Identifier>
  wheelAngleVar: m.CapturedMatcher<t.Identifier, t.Identifier>
  rotationAccumVar: m.CapturedMatcher<t.Identifier, t.Identifier>
  loopIndexVar: m.CapturedMatcher<t.Identifier, t.Identifier>
} {
  // Capture all relevant identifiers
  const funcId = m.capture(m.identifier())
  const sectorAngleVar = m.capture(m.identifier())
  const wheelAngleVar = m.capture(m.identifier())
  const rotationAccumVar = m.capture(m.identifier())
  const loopIndexVar = m.capture(m.identifier())

  // Matcher for the initial let declaration (v92 = 0)
  const rotationAccumDecl = r.singleVariableDeclaration(
    'let',
    rotationAccumVar,
    m.numericLiteral(0),
  )

  // Matcher for the for loop test condition (v93 < v77.length)
  const forLoopTest = m.binaryExpression(
    '<',
    loopIndexVar,
    m.memberExpression(sectorAngleVar, m.identifier('length')),
  )

  // Matcher for the for loop initialization (let v93 = 0)
  const forLoopInit = m.variableDeclaration('let', [
    m.variableDeclarator(loopIndexVar, m.numericLiteral(0)),
  ])

  // Matcher for the for loop update (v93++)
  const forLoopUpdate = m.updateExpression('++', m.fromCapture(loopIndexVar), false)

  // Matcher for the accumulation statement (v92 += v77[v93])
  const accumulationStmt = m.expressionStatement(
    m.assignmentExpression(
      '+=',
      m.fromCapture(rotationAccumVar),
      m.memberExpression(
        m.fromCapture(sectorAngleVar),
        m.fromCapture(loopIndexVar),
        true, // computed
      ),
    ),
  )

  // Matcher for the Math.abs condition (Math.abs(v91) < v92)
  const absCondition = m.binaryExpression(
    '<',
    m.callExpression(m.memberExpression(m.identifier('Math'), m.identifier('abs')), [
      wheelAngleVar,
    ]),
    m.fromCapture(rotationAccumVar),
  )

  // Matcher for the if statement with return
  const ifReturnStmt = m.ifStatement(
    absCondition,
    m.blockStatement([m.returnStatement(m.fromCapture(loopIndexVar))]),
  )

  // Matcher for the complete for statement
  const forStmtMatcher = m.forStatement(
    forLoopInit,
    forLoopTest,
    forLoopUpdate,
    m.blockStatement([accumulationStmt, ifReturnStmt]),
  )

  // Matcher for the final return statement (return 0)
  const finalReturn = m.returnStatement(m.numericLiteral(0))

  // Matcher for the complete arrow function body
  const arrowFunctionBodyMatcher = m.blockStatement([
    rotationAccumDecl,
    forStmtMatcher,
    finalReturn,
  ])

  // Matcher for the arrow function
  const arrowFunctionMatcher = m.arrowFunctionExpression(
    [], // no parameters
    arrowFunctionBodyMatcher,
  )

  // Final matcher for the complete variable declaration
  const varDeclMatcher = m.variableDeclaration('const', [
    m.variableDeclarator(funcId, arrowFunctionMatcher),
  ])

  return {
    matcher: varDeclMatcher,
    funcId,
    sectorAngleVar,
    wheelAngleVar,
    rotationAccumVar,
    loopIndexVar,
  }
}

// var v73 = [{
//         text: '',
//         id: 0,
//         color: '#ADB2B0'
//     }];
export function locateWheelSectors(): Locator<t.VariableDeclaration> & {
  varId: m.CapturedMatcher<t.Identifier, t.Identifier>
} {
  // Capture the variable name
  const varId = m.capture(m.identifier())

  // Matcher for object property with specific key and value
  const textProperty = m.objectProperty(m.identifier('text'), m.stringLiteral(''))
  const idProperty = m.objectProperty(m.identifier('id'), m.numericLiteral(0))
  const colorProperty = m.objectProperty(m.identifier('color'), m.stringLiteral('#ADB2B0'))

  // Matcher for the wheel sector object
  const sectorObject = m.objectExpression([textProperty, idProperty, colorProperty])

  // Matcher for the array containing one sector object
  const sectorArray = m.arrayExpression([sectorObject])

  // Final matcher for the variable declaration
  const varDeclMatcher = m.variableDeclaration('var', [m.variableDeclarator(varId, sectorArray)])

  return {
    matcher: varDeclMatcher,
    varId,
  }
}

const MatcherWheelM = {
  inFile: {
    locateLoadWheelFunction,
    inLoadWheelFunction: {
      locateCalcCurrentSectorIndex,
      locateWheelSectors,
    },
  },
}

export { MatcherWheelM }
