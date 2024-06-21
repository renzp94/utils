import { expect, test } from 'bun:test'
import { isFalsy } from '../../src'

test('isFalsy', () => {
  expect(isFalsy(false)).toBeTrue()
  expect(isFalsy(0)).toBeTrue()
  expect(isFalsy('')).toBeTrue()
  expect(isFalsy(null)).toBeTrue()
  expect(isFalsy(undefined)).toBeTrue()
  expect(isFalsy(Number.NaN)).toBeTrue()
  expect(isFalsy(1)).toBeFalse()
})
