import { expect, test } from 'bun:test'
import { isFloat } from '../../src'

test('isFloat', () => {
  expect(isFloat(0)).toBeFalse()
  expect(isFloat(1.2e5)).toBeFalse()
  expect(isFloat(0.2)).toBeTrue()
  expect(isFloat('0')).toBeFalse()
})
