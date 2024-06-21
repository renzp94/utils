import { expect, test } from 'bun:test'
import { isUndefined } from '../../src'

test('isUndefined', () => {
  let a: unknown
  expect(isUndefined(a)).toBeTrue()
  const b = 1
  expect(isUndefined(b)).toBeFalse()
  expect(isUndefined(null)).toBeFalse()
})
