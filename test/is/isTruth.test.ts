import { expect, test } from 'bun:test'
import { isTruth } from '../../src'

test('isTruth', () => {
  expect(isTruth(false)).toBeFalse()
  expect(isTruth(0)).toBeFalse()
  expect(isTruth('')).toBeFalse()
  expect(isTruth(null)).toBeFalse()
  expect(isTruth(undefined)).toBeFalse()
  expect(isTruth(Number.NaN)).toBeFalse()
  expect(isTruth(1)).toBeTrue()
})
