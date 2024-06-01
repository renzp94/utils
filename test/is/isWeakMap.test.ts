import { expect, test } from 'bun:test'
import { isWeakMap } from '../../src'

test('isWeakMap', () => {
  expect(isWeakMap(new WeakMap())).toBe(true)
  expect(isWeakMap({ size: 0 })).toBe(false)
  expect(isWeakMap(new Map())).toBe(false)
  expect(isWeakMap(new Set())).toBe(false)
  expect(isWeakMap({})).toBe(false)
  expect(isWeakMap([])).toBe(false)
  expect(isWeakMap(null)).toBe(false)
})
