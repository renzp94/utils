import { expect, test } from 'bun:test'
import { isEqual } from '../../src'

test('NaN判断', () => {
  expect(isEqual(Number.NaN, Number.NaN)).toBeTrue()
  expect(isEqual(Number.NaN, 0 / 0)).toBeTrue()
  expect(isEqual(Number.NaN, 0)).toBeFalse()
  expect(isEqual(Number.NaN, undefined)).toBeFalse()
  expect(isEqual(Number.NaN, null)).toBeFalse()
  expect(isEqual(Number.NaN, false)).toBeFalse()
})

test('假值判断', () => {
  expect(isEqual(false, false)).toBeTrue()
  expect(isEqual(false, Number.NaN)).toBeFalse()
  expect(isEqual(false, 0)).toBeFalse()
  expect(isEqual(false, '')).toBeFalse()
  expect(isEqual(false, undefined)).toBeFalse()
  expect(isEqual(undefined, null)).toBeFalse()
})

test('基本类型判断', () => {
  expect(isEqual(0, 0)).toBeTrue()
  expect(isEqual(0, -0)).toBeTrue()
  expect(isEqual(0, '0')).toBeFalse()
  expect(isEqual(0, Number.NaN)).toBeFalse()
  expect(isEqual(false, 0)).toBeFalse()
  expect(isEqual(false, '')).toBeFalse()
  expect(isEqual(false, undefined)).toBeFalse()
  expect(isEqual(undefined, null)).toBeFalse()
  expect(isEqual('ab', 'abc')).toBeFalse()
  const a = Symbol(1)
  const b = a
  expect(isEqual(a, b)).toBeTrue()
  expect(isEqual(Symbol(1), Symbol(1))).toBeTrue()
})

test('日期判断', () => {
  expect(isEqual(new Date('1970/01/01'), new Date('1970/01/01'))).toBeTrue()
  expect(isEqual(new Date('1970/01/01'), new Date('1970/01/02'))).toBeFalse()
  const now1 = new Date()
  const now2 = new Date()
  expect(isEqual(now1, now2)).toBeTrue()
})

test('正则判断', () => {
  expect(isEqual(/\d/, /\d/)).toBeTrue()
  expect(isEqual(/\d/, /[0-9]/)).toBeFalse()
})

test('对象判断', () => {
  expect(isEqual({ a: 1 }, { a: 1 })).toBeTrue()
  expect(isEqual({ a: '1' }, { a: 1 })).toBeFalse()
  expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBeFalse()
  expect(
    isEqual(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 2 } } },
    ),
  ).toBeTrue()
  expect(
    isEqual(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 3 } } },
    ),
  ).toBeFalse()
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
  ).toBeTrue()
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
  ).toBeFalse()
})

test('数组判断', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTrue()
  expect(isEqual([1, 2], [1, 2, 3])).toBeFalse()
  expect(isEqual([], [])).toBeTrue()
  expect(isEqual([1, 2, 3, '4'], [1, 2, 3, 4])).toBeFalse()
  expect(isEqual([1, 2, 3, '4'], [1, 2, 3])).toBeFalse()
  expect(isEqual([0], [false])).toBeFalse()

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
  ).toBeTrue()

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
  ).toBeFalse()
})

test('Set判断', () => {
  expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBeTrue()
  expect(isEqual(new Set([1, 2, 3, '4']), new Set([1, 2, 3, 4]))).toBeFalse()
  expect(isEqual(new Set([1, 2, 3, '4']), new Set([1, 2, 3]))).toBeFalse()
  expect(isEqual(new Set([0]), new Set([false]))).toBeFalse()

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
  ).toBeTrue()

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
  ).toBeFalse()
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
  ).toBeTrue()

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
  ).toBeTrue()

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
  ).toBeFalse()
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
  ).toBeTrue()

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
  ).toBeTrue()
})
