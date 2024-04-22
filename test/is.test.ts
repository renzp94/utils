import { expect, test } from 'bun:test'
import {
  isArray,
  isBigint,
  isBoolean,
  isDate,
  isDef,
  isFalsy,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUnDef,
  isUndefined,
} from '../src'

test('isArray', () => {
  expect(isArray([])).toBe(true)
  expect(isArray({ length: 1 })).toBe(false)
})

test('isBigint', () => {
  expect(isBigint(1n)).toBe(true)
  expect(isBoolean(1)).toBe(false)
})

test('isBoolean', () => {
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(0)).toBe(false)
})

test('isBoolean', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate('1970-01-01')).toBe(false)
})

test('isDef', () => {
  const a = 1
  expect(isDef(a)).toBe(true)
  let b: unknown
  expect(isDef(b)).toBe(false)
  const c = null
  expect(isDef(c)).toBe(false)
  const d = undefined
  expect(isDef(d)).toBe(false)
  const e = 'null'
  expect(isDef(e)).toBe(true)
  const f = 'undefined'
  expect(isDef(f)).toBe(true)
  let g: number | undefined | null
  if (isDef(g)) {
    g // 自动推断类型为number
  } else {
    g // 自动推断类型为undefined | null
  }
})

test('isFalsy', () => {
  expect(isFalsy(false)).toBe(true)
  expect(isFalsy(0)).toBe(true)
  expect(isFalsy('')).toBe(true)
  expect(isFalsy(null)).toBe(true)
  expect(isFalsy(undefined)).toBe(true)
  expect(isFalsy(Number.NaN)).toBe(true)
  expect(isFalsy(1)).toBe(false)
})

test('isFunction', () => {
  expect(isFunction(1)).toBe(false)
  expect(isFunction(() => {})).toBe(true)
  const a: ((v: string) => string) | undefined = (v: string) => {
    return v
  }
  expect(isFunction(a)).toBe(true)
})

test('isMap', () => {
  expect(isMap(new Map())).toBe(true)
  expect(isMap({ size: 0 })).toBe(false)
})

test('isNull', () => {
  expect(isNull(null)).toBe(true)
  expect(isNull(0)).toBe(false)
})

test('isNumber', () => {
  expect(isNumber(0)).toBe(true)
  expect(isNumber('0')).toBe(false)
})

test('isObject', () => {
  const a = {
    a: 1,
  }
  expect(isObject(a)).toBe(true)
  expect(isObject(1)).toBe(false)
  if (isObject(a)) {
    a
  } else {
    a
  }
})

test('isRegExp', () => {
  expect(isRegExp(/\d/)).toBe(true)
  expect(isRegExp('/d/')).toBe(false)
})

test('isSet', () => {
  expect(isSet(new Set())).toBe(true)
  expect(isSet({ size: 0 })).toBe(false)
})

test('isString', () => {
  expect(isString('0')).toBe(true)
  expect(isString(0)).toBe(false)
})

test('isSymbol', () => {
  expect(isSymbol(Symbol(0))).toBe(true)
  expect(isSymbol(0)).toBe(false)
})

test('isUndefined', () => {
  let a: unknown
  expect(isUndefined(a)).toBe(true)
  const b = 1
  expect(isUndefined(b)).toBe(false)
  expect(isUndefined(null)).toBe(false)
})

test('isUnDef', () => {
  expect(isUnDef(undefined)).toBe(true)
  expect(isUnDef(null)).toBe(true)
  expect(isUnDef(0)).toBe(false)
})
