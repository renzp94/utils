import { expect, test } from 'bun:test'
import { isArrayLike } from '../../src'

test('isArrayLike', () => {
  expect(isArrayLike([])).toBeTrue()
  expect(isArrayLike({ 1: 1, 2: 2 })).toBeFalse()
  expect(isArrayLike({ 1: 1, 2: 2, length: 1 })).toBeTrue()
  expect(isArrayLike({ 1: 1, 2: 2, length: 1.2 })).toBeTrue()
  expect(isArrayLike({ length: 0 })).toBeTrue()
  const a: any = (a: unknown, b: unknown) => {}
  expect(isArrayLike(a)).toBeFalse()
})

test('NodeList', () => {
  expect(isArrayLike(document.querySelectorAll('div'))).toBeTrue()
})
