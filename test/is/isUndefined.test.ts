import { expect, test } from 'bun:test'
import { isUndefined } from '../../src'

test('isUndefined', () => {
  let a: unknown
  expect(isUndefined(a)).toBe(true)
  const b = 1
  expect(isUndefined(b)).toBe(false)
  expect(isUndefined(null)).toBe(false)
})
