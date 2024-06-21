import { expect, test } from 'bun:test'
import { isBoolean } from '../../src'

test('isBoolean', () => {
  expect(isBoolean(false)).toBeTrue()
  expect(isBoolean(0)).toBeFalse()
})
