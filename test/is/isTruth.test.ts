import { expect, test } from 'bun:test'
import { isTruth } from '../../src'

test('isTruth', () => {
  expect(isTruth(false)).toBe(false)
  expect(isTruth(0)).toBe(false)
  expect(isTruth('')).toBe(false)
  expect(isTruth(null)).toBe(false)
  expect(isTruth(undefined)).toBe(false)
  expect(isTruth(Number.NaN)).toBe(false)
  expect(isTruth(1)).toBe(true)
})
