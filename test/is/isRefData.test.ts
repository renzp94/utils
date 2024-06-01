import { expect, test } from 'bun:test'
import { isRefData } from '../../src'

test('isRefData', () => {
  expect(isRefData(new WeakSet())).toBe(true)
  expect(isRefData(new WeakMap())).toBe(true)
  expect(isRefData({ size: 0 })).toBe(true)
  expect(isRefData(new Map())).toBe(true)
  expect(isRefData(new Set())).toBe(true)
  expect(isRefData({})).toBe(true)
  expect(isRefData([])).toBe(true)
  expect(isRefData(1)).toBe(false)
  expect(isRefData(null)).toBe(false)
})
