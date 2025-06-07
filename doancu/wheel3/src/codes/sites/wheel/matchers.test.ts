import * as r from '@/codes/matchers'
import * as l from '@/codes/sites/wheel/matchers'
import * as t from '@babel/types'
import * as m from '@codemod/matchers'
import { runMatcherTest } from '@test/unit/utils/matcherTestDriver'
import { describe, expect, it } from 'vitest'

describe('loadWheel matchers', () => {
  it('matches the standard pattern', () => {
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
    const locator = l.locateLoadWheelFunction()

    const matches = runMatcherTest(testCode, locator.matcher)

    expect(matches).toHaveLength(1)
    expect(m.fromCapture(locator.funcId).match(t.identifier('loadWheel'))).toBe(true)
    expect(m.fromCapture(locator.varId).match(t.identifier('vGetWheelSettingInArray'))).toBe(true)
    expect(m.fromCapture(locator.funcId).match(t.identifier('l'))).toBe(false)
    expect(m.fromCapture(locator.varId).match(t.identifier('v'))).toBe(false)
  })
})

describe('calcCurrentSectorIndex matcher', () => {
  it('matches the standard pattern', () => {
    const testCode = /* js */ `
      const calcCurrentSectorIndex = () => {
        let rotationAccum = 0
        for (let i = 0; i < sectorAngles.length; i++) {
          rotationAccum += sectorAngles[i]
          if (Math.abs(currentAngle) < rotationAccum) {
            return i
          }
        }
        return 0
      }
    `

    const locator = l.locateCalcCurrentSectorIndex()
    const matches = runMatcherTest(testCode, locator.matcher)

    expect(matches).toHaveLength(1)
    expect(m.fromCapture(locator.funcId).match(t.identifier('calcCurrentSectorIndex'))).toBe(true)
    expect(m.fromCapture(locator.sectorAngleVar).match(t.identifier('sectorAngles'))).toBe(true)
    expect(m.fromCapture(locator.wheelAngleVar).match(t.identifier('currentAngle'))).toBe(true)
    expect(m.fromCapture(locator.rotationAccumVar).match(t.identifier('rotationAccum'))).toBe(true)
    expect(m.fromCapture(locator.loopIndexVar).match(t.identifier('i'))).toBe(true)
  })

  it('matches with different variable names', () => {
    const testCode = /* js */ `
      const vF4 = () => {
        let v92 = 0
        for (let v93 = 0; v93 < v77.length; v93++) {
          v92 += v77[v93]
          if (Math.abs(v91) < v92) {
            return v93
          }
        }
        return 0
      }
    `

    const locator = l.locateCalcCurrentSectorIndex()
    const matches = runMatcherTest(testCode, locator.matcher)

    expect(matches).toHaveLength(1)
    expect(m.fromCapture(locator.funcId).match(t.identifier('vF4'))).toBe(true)
    expect(m.fromCapture(locator.sectorAngleVar).match(t.identifier('v77'))).toBe(true)
    expect(m.fromCapture(locator.wheelAngleVar).match(t.identifier('v91'))).toBe(true)
    expect(m.fromCapture(locator.rotationAccumVar).match(t.identifier('v92'))).toBe(true)
    expect(m.fromCapture(locator.loopIndexVar).match(t.identifier('v93'))).toBe(true)
  })

  it('does not match incorrect patterns', () => {
    const testCode = /* js */ `
      const wrongFunction = () => {
        let total = 0
        for (let i = 0; i < items.length; i++) {
          total += items[i]
          if (total > threshold) {
            return i
          }
        }
        return -1
      }
    `

    const locator = l.locateCalcCurrentSectorIndex()
    const matches = runMatcherTest(testCode, locator.matcher)

    expect(matches).toHaveLength(0)
    expect(m.fromCapture(locator.funcId).match(t.identifier('wrongFunction'))).toBe(true)
    expect(m.fromCapture(locator.sectorAngleVar).match(t.identifier('items'))).toBe(true)
    expect(m.fromCapture(locator.wheelAngleVar).match(undefined)).toBe(true)
    expect(m.fromCapture(locator.rotationAccumVar).match(t.identifier('total'))).toBe(true)
    expect(m.fromCapture(locator.loopIndexVar).match(t.identifier('i'))).toBe(true)
  })
})
