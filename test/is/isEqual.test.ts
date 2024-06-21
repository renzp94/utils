import { expect, test } from 'bun:test'
import { isEqual } from '../../src'

test('NaN判断', () => {
  expect(isEqual(Number.NaN, Number.NaN)).toBe(true)
  expect(isEqual(Number.NaN, 0 / 0)).toBe(true)
  expect(isEqual(Number.NaN, 0)).toBe(false)
  expect(isEqual(Number.NaN, undefined)).toBe(false)
  expect(isEqual(Number.NaN, null)).toBe(false)
  expect(isEqual(Number.NaN, false)).toBe(false)
})

test('假值判断', () => {
  expect(isEqual(false, false)).toBe(true)
  expect(isEqual(false, Number.NaN)).toBe(false)
  expect(isEqual(false, 0)).toBe(false)
  expect(isEqual(false, '')).toBe(false)
  expect(isEqual(false, undefined)).toBe(false)
  expect(isEqual(undefined, null)).toBe(false)
})

test('基本类型判断', () => {
  expect(isEqual(0, 0)).toBe(true)
  expect(isEqual(0, -0)).toBe(true)
  expect(isEqual(0, '0')).toBe(false)
  expect(isEqual(0, Number.NaN)).toBe(false)
  expect(isEqual(false, 0)).toBe(false)
  expect(isEqual(false, '')).toBe(false)
  expect(isEqual(false, undefined)).toBe(false)
  expect(isEqual(undefined, null)).toBe(false)
  expect(isEqual('ab', 'abc')).toBe(false)
  const a = Symbol(1)
  const b = a
  expect(isEqual(a, b)).toBe(true)
  expect(isEqual(Symbol(1), Symbol(1))).toBe(true)
})

test('日期判断', () => {
  expect(isEqual(new Date('1970/01/01'), new Date('1970/01/01'))).toBe(true)
  expect(isEqual(new Date('1970/01/01'), new Date('1970/01/02'))).toBe(false)
  const now1 = new Date()
  const now2 = new Date()
  expect(isEqual(now1, now2)).toBe(true)
})

test('正则判断', () => {
  expect(isEqual(/\d/, /\d/)).toBe(true)
  expect(isEqual(/\d/, /[0-9]/)).toBe(false)
})

test('对象判断', () => {
  expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
  expect(isEqual({ a: '1' }, { a: 1 })).toBe(false)
  expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  expect(
    isEqual(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 2 } } },
    ),
  ).toBe(true)
  expect(
    isEqual(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 3 } } },
    ),
  ).toBe(false)
})

test('Map判断', () => {
  expect(
    isEqual(
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
    ),
  ).toBe(true)
  expect(
    isEqual(
      new Map<string, string | number>([
        ['a', '1'],
        ['b', 2],
      ]),
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
    ),
  ).toBe(false)
})

test('数组判断', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
  expect(isEqual([1, 2], [1, 2, 3])).toBe(false)
  expect(isEqual([], [])).toBe(true)
  expect(isEqual([1, 2, 3, '4'], [1, 2, 3, 4])).toBe(false)
  expect(isEqual([1, 2, 3, '4'], [1, 2, 3])).toBe(false)
  expect(isEqual([0], [false])).toBe(false)

  expect(
    isEqual(
      [
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ],
      [
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ],
    ),
  ).toBe(true)

  expect(
    isEqual(
      [
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ],
      [
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ],
    ),
  ).toBe(false)
})

test('Set判断', () => {
  expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true)
  expect(isEqual(new Set([1, 2, 3, '4']), new Set([1, 2, 3, 4]))).toBe(false)
  expect(isEqual(new Set([1, 2, 3, '4']), new Set([1, 2, 3]))).toBe(false)
  expect(isEqual(new Set([0]), new Set([false]))).toBe(false)

  expect(
    isEqual(
      new Set([
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ]),
      new Set([
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ]),
    ),
  ).toBe(true)

  expect(
    isEqual(
      new Set([
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 4,
        },
      ]),
      new Set([
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ]),
    ),
  ).toBe(false)
})

test('指定key判断是否相等', () => {
  expect(
    isEqual(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 3,
      },
      'a',
    ),
  ).toBe(true)

  expect(
    isEqual(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
        c: 3,
      },
      ['a', 'b'],
    ),
  ).toBe(true)

  expect(
    isEqual(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: '2',
        c: 3,
      },
      ['a', 'b'],
    ),
  ).toBe(false)
})

test('自定义函数判断是否相等', () => {
  type Obj = { a: number; b: number }
  expect(
    isEqual(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 3,
      },
      (target: Obj, value: Obj) => target.a === value.a,
    ),
  ).toBe(true)

  expect(
    isEqual(
      [
        {
          a: 2,
          b: 1,
        },
        {
          a: 1,
          b: 3,
        },
      ],
      [
        {
          a: 1,
          b: 2,
        },
        {
          a: 3,
          b: 1,
        },
      ],
      (target: Obj, value: Obj) => target.a === value.b,
    ),
  ).toBe(true)
})
