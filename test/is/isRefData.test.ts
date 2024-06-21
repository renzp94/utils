import { expect, test } from 'bun:test'
import { isRefData } from '../../src'

test('isRefData', () => {
  expect(isRefData(new WeakSet())).toBeTrue()
  expect(isRefData(new WeakMap())).toBeTrue()
  expect(isRefData({ size: 0 })).toBeTrue()
  expect(isRefData(new Map())).toBeTrue()
  expect(isRefData(new Set())).toBeTrue()
  expect(isRefData({})).toBeTrue()
  expect(isRefData([])).toBeTrue()
  expect(isRefData(1)).toBeFalse()
  expect(isRefData(null)).toBeFalse()
})
