import * as r from '@/codes/matchers'
import * as m from '@codemod/matchers'
import { describe, expect, it } from 'vitest'
import { runMatcherTest } from './utils/matcherTestDriver'

describe('Expression matchers', () => {
  it('match expressions involving != or !== cases', () => {
    const testCode = `
      if (a !== "test") { console.log("Matched"); }
      if (b != 42) { console.log("Also Matched"); }
    `

    const matches = runMatcherTest(
      testCode,
      r.notEqualExpression(m.identifier(), m.anyExpression()),
    )

    expect(matches).toMatchObject(['a !== "test"', 'b != 42'])
  })

  it('match chained && expressions involving != or !==', () => {
    const testCode = `
    if (!rt || rt !== getDomain("backup")) { console.log("Matched"); }
    if (!rt || rt !== "some-link" && rt !== "another-link") { console.log("Matched"); }
    if (!domain || domain != getDomain() && domain !== "example.com" && domain !== otherSite) { console.log("Also Matched"); }
  `

    const matches = runMatcherTest(
      testCode,
      r.chainedAndNotEquals(m.identifier(), m.anyExpression()),
    )

    expect(matches).toMatchObject([
      'rt !== getDomain("backup")',
      'rt !== "some-link" && rt !== "another-link"',
      'rt !== "some-link"',
      'rt !== "another-link"',
      'domain != getDomain() && domain !== "example.com" && domain !== otherSite',
      'domain != getDomain() && domain !== "example.com"',
      'domain != getDomain()',
      'domain !== "example.com"',
      'domain !== otherSite',
    ])
  })

  it("match '!var || var !== value' patterns", () => {
    const testCode = `
    if (!rt || rt !== getDomain("backup")) { console.log("Matched"); }
    if (!state.hostName || state.hostName !== "example.com" && state.hostName !== otherSite) { console.log("Also Matched"); }
    if (!one || one !== "example.com" && two !== otherSite) { console.log("Not Matched"); }
  `

    const matches = runMatcherTest(
      testCode,
      r.notOrMultiNotEquals(m.or(m.identifier(), m.memberExpression()), m.anyExpression()),
    )

    expect(matches).toMatchObject([
      '!rt || rt !== getDomain("backup")',
      '!state.hostName || state.hostName !== "example.com" && state.hostName !== otherSite',
    ])
  })
})

describe('blockStatement matchers', () => {
  /**
   * Subarray (Ordered & Consecutive)
   */
  it('matches a contiguous subarray of statements correctly', () => {
    const testCode = `
      {
        var a = foo();
        if (a == null) { return false; }
        var b = a.entries;
        var c = a.duration;
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubarray([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(1)
  })

  it('fails when statements are non-contiguous but in order', () => {
    const testCode = `
      {
        var a = foo();
        var randomStatement = someCall(); // Unexpected statement in-between
        if (a == null) { return false; }
        var b = a.entries;
        var c = a.duration;
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubarray([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(0)
  })

  /**
   * Subsequence (Ordered but Gaps Allowed)
   */
  it('matches a sequence of statements allowing gaps', () => {
    const testCode = `
      {
        var a = foo();
        var extra1 = something(); // Allowed gap
        if (a == null) { return false; }
        var extra2 = anotherThing(); // Allowed gap
        var b = a.entries;
        var c = a.duration;
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubsequence([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(1)
  })

  it('fails when order is incorrect', () => {
    const testCode = `
      {
        var a = foo();
        var b = a.entries; // Should appear after null check
        if (a == null) { return false; }
        var c = a.duration;
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubsequence([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(0)
  })

  /**
   * Subset (Unordered)
   */
  it('matches all statements in any order', () => {
    const testCode = `
      {
        var b = a.entries;
        if (a == null) { return false; }
        var c = a.duration;
        var a = foo();
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubset([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(1)
  })

  it('fails when a required statement is missing', () => {
    const testCode = `
      {
        var b = a.entries;
        if (a == null) { return false; }
        var a = foo();
        // Missing: var c = a.duration;
      }
    `

    const matches = runMatcherTest(
      testCode,
      r.blockStatementSubset([
        m.variableDeclaration('var', [m.variableDeclarator(m.identifier('a'), m.callExpression())]),
        m.ifStatement(
          m.binaryExpression('==', m.identifier('a'), m.nullLiteral()),
          m.blockStatement([m.returnStatement()]),
        ),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('b'),
            m.memberExpression(m.identifier('a'), m.identifier('entries')),
          ),
        ]),
        m.variableDeclaration('var', [
          m.variableDeclarator(
            m.identifier('c'),
            m.memberExpression(m.identifier('a'), m.identifier('duration')),
          ),
        ]),
      ]),
    )

    expect(matches).toHaveLength(0)
  })
})
