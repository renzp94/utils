import { expect, test } from 'bun:test'
import { isBoolean } from '../../src'

test('isBoolean', () => {
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(0)).toBe(false)
})
