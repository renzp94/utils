import { expect, test } from 'bun:test'
import { isPrimitive } from '../../src'

test('isPrimitive', () => {
  const test = () => {}
  expect(isPrimitive('1')).toBeTrue()
  expect(isPrimitive(1)).toBeTrue()
  expect(isPrimitive(false)).toBeTrue()
  expect(isPrimitive(null)).toBeTrue()
  expect(isPrimitive(undefined)).toBeTrue()
  expect(isPrimitive(Symbol('1'))).toBeTrue()
  expect(isPrimitive({})).toBeFalse()
  expect(isPrimitive([])).toBeFalse()
  expect(isPrimitive(test)).toBeFalse()
  expect(isPrimitive(new Date())).toBeFalse()
  expect(isPrimitive(BigInt(1))).toBeTrue()
  expect(isPrimitive(new Map())).toBeFalse()
  expect(isPrimitive(new Set())).toBeFalse()
  expect(isPrimitive(new WeakMap())).toBeFalse()
  expect(isPrimitive(new WeakSet())).toBeFalse()
  expect(isPrimitive(/1/)).toBeFalse()
  expect(isPrimitive(new Error())).toBeFalse()
  expect(isPrimitive(new Promise(() => {}))).toBeFalse()
})
