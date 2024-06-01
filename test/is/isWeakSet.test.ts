import { expect, test } from 'bun:test'
import { isWeakSet } from '../../src'

test('isWeakSet', () => {
  expect(isWeakSet(new WeakSet())).toBe(true)
  expect(isWeakSet(new WeakMap())).toBe(false)
  expect(isWeakSet({ size: 0 })).toBe(false)
  expect(isWeakSet(new Map())).toBe(false)
  expect(isWeakSet(new Set())).toBe(false)
  expect(isWeakSet({})).toBe(false)
  expect(isWeakSet([])).toBe(false)
  expect(isWeakSet(null)).toBe(false)
})
