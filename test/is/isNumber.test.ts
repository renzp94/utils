import { expect, test } from 'bun:test'
import { isNumber } from '../../src'

test('isNumber', () => {
  expect(isNumber(0)).toBe(true)
  expect(isNumber('0')).toBe(false)
})
