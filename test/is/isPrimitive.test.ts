import { expect, test } from 'bun:test'
import { isPrimitive } from '../../src'

test('isPrimitive', () => {
  const test = () => {}
  expect(isPrimitive('1')).toBe(true)
  expect(isPrimitive(1)).toBe(true)
  expect(isPrimitive(false)).toBe(true)
  expect(isPrimitive(null)).toBe(true)
  expect(isPrimitive(undefined)).toBe(true)
  expect(isPrimitive(Symbol('1'))).toBe(true)
  expect(isPrimitive({})).toBe(false)
  expect(isPrimitive([])).toBe(false)
  expect(isPrimitive(test)).toBe(false)
  expect(isPrimitive(new Date())).toBe(false)
  expect(isPrimitive(BigInt(1))).toBe(true)
  expect(isPrimitive(new Map())).toBe(false)
  expect(isPrimitive(new Set())).toBe(false)
  expect(isPrimitive(new WeakMap())).toBe(false)
  expect(isPrimitive(new WeakSet())).toBe(false)
  expect(isPrimitive(/1/)).toBe(false)
  expect(isPrimitive(new Error())).toBe(false)
  expect(isPrimitive(new Promise(() => {}))).toBe(false)
})
