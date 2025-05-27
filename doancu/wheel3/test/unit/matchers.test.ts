import {
  chainedAndNotEqualsAny,
  notEqualExpression,
  notOrMultiNotEqualsAny,
} from '@/codes/matchers'
import * as m from '@codemod/matchers'
import { describe, expect, it } from 'vitest'
import { runMatcherTest } from './utils/matcherTestDriver'

describe('Matcher Tests', () => {
  it('match expressions involving != or !== cases', () => {
    const testCode = `
      if (a !== "test") { console.log("Matched"); }
      if (b != 42) { console.log("Also Matched"); }
    `

    const matches = runMatcherTest(testCode, notEqualExpression(m.identifier(), m.anyExpression()))

    expect(matches).toMatchObject(['a !== "test"', 'b != 42'])
  })

  it('match chained && expressions involving != or !==', () => {
    const testCode = `
      if (!rt || rt !== getDomain("backup")) { console.log("Matched"); }
      if (!rt || rt !== "some-link" && rt !== "another-link") { console.log("Matched"); }
      if (!domain || domain != getDomain() && domain !== "example.com" && domain !== otherSite) { console.log("Also Matched"); }
    `

    const matches = runMatcherTest(testCode, chainedAndNotEqualsAny(m.identifier()))

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
      notOrMultiNotEqualsAny(m.or(m.identifier(), m.memberExpression())),
    )

    expect(matches).toMatchObject([
      '!rt || rt !== getDomain("backup")',
      '!state.hostName || state.hostName !== "example.com" && state.hostName !== otherSite',
    ])
  })
})
