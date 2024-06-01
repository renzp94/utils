import { expect, test } from 'bun:test'
import { isObject } from '../../src'

test('isObject', () => {
  const a = {
    a: 1,
  }
  expect(isObject(a)).toBe(true)
  expect(isObject(1)).toBe(false)
  if (isObject(a)) {
    a
  } else {
    a
  }
})
