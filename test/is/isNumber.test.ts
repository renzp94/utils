import { expect, test } from 'bun:test'
import { isNumber } from '../../src'

test('isNumber', () => {
  expect(isNumber(0)).toBeTrue()
  expect(isNumber('0')).toBeFalse()
})
