import { expect, test } from 'bun:test'
import { isWeakMap } from '../../src'

test('isWeakMap', () => {
  expect(isWeakMap(new WeakMap())).toBeTrue()
  expect(isWeakMap({ size: 0 })).toBeFalse()
  expect(isWeakMap(new Map())).toBeFalse()
  expect(isWeakMap(new Set())).toBeFalse()
  expect(isWeakMap({})).toBeFalse()
  expect(isWeakMap([])).toBeFalse()
  expect(isWeakMap(null)).toBeFalse()
})
