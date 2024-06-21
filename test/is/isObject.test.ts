import { expect, test } from 'bun:test'
import { isObject } from '../../src'

test('isObject', () => {
  const a = {
    a: 1,
  }
  expect(isObject(a)).toBeTrue()
  expect(isObject(1)).toBeFalse()
  if (isObject(a)) {
    a
  } else {
    a
  }
})
