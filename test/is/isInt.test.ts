import { expect, test } from 'bun:test'
import { isInt } from '../../src'

test('isInt', () => {
  expect(isInt(0)).toBeTrue()
  expect(isInt(1.2e5)).toBeTrue()
  expect(isInt(0.2)).toBeFalse()
  expect(isInt('0')).toBeFalse()
})
