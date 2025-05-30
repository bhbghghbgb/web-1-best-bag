import * as s from '@/codes/sites/wheel/matchers'
import * as t from '@babel/types'
import * as m from '@codemod/matchers'
import { runMatcherTest } from '@test/unit/utils/matcherTestDriver'
import { describe, expect, it } from 'vitest'

describe('wheel site matchers', () => {
  it('matches loadWheel function declaration', () => {
    const testCode = /* js */ `
      async function loadWheel() {
        var vGetWheelSettingInArray = getWheelSettingInArray()
        if (vGetWheelSettingInArray == null) {
          return false
        }
        var v46 = ajax_object.home_url
        var v56 = vGetWheelSettingInArray.is_advance
        var v57 = vGetWheelSettingInArray.entries
        var v58 = vGetWheelSettingInArray.duration
        var v59 = vGetWheelSettingInArray.is_stroke
      }
    `
    const capturedFunc = m.capture(m.identifier())
    const capturedVar = m.capture(m.identifier())

    const matches = runMatcherTest(testCode, s.loadWheelFunction(capturedFunc, capturedVar))

    expect(matches).toHaveLength(1)
    expect(m.fromCapture(capturedFunc).match(t.identifier('loadWheel'))).toBe(true)
    expect(m.fromCapture(capturedVar).match(t.identifier('vGetWheelSettingInArray'))).toBe(true)
    expect(m.fromCapture(capturedFunc).match(t.identifier('l'))).toBe(false)
    expect(m.fromCapture(capturedVar).match(t.identifier('v'))).toBe(false)
  })
})
