import { expect, test } from 'bun:test'
import { isWeakSet } from '../../src'

test('isWeakSet', () => {
  expect(isWeakSet(new WeakSet())).toBeTrue()
  expect(isWeakSet(new WeakMap())).toBeFalse()
  expect(isWeakSet({ size: 0 })).toBeFalse()
  expect(isWeakSet(new Map())).toBeFalse()
  expect(isWeakSet(new Set())).toBeFalse()
  expect(isWeakSet({})).toBeFalse()
  expect(isWeakSet([])).toBeFalse()
  expect(isWeakSet(null)).toBeFalse()
})
