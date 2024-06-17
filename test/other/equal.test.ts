import { expect, test } from 'bun:test'
import { equal } from '../../src'

test('NaN判断', () => {
  expect(equal(Number.NaN, Number.NaN)).toBe(true)
  expect(equal(Number.NaN, 0 / 0)).toBe(true)
  expect(equal(Number.NaN, 0)).toBe(false)
  expect(equal(Number.NaN, undefined)).toBe(false)
  expect(equal(Number.NaN, null)).toBe(false)
  expect(equal(Number.NaN, false)).toBe(false)
})

test('假值判断', () => {
  expect(equal(false, false)).toBe(true)
  expect(equal(false, Number.NaN)).toBe(false)
  expect(equal(false, 0)).toBe(false)
  expect(equal(false, '')).toBe(false)
  expect(equal(false, undefined)).toBe(false)
  expect(equal(undefined, null)).toBe(false)
})

test('基本类型判断', () => {
  expect(equal(0, 0)).toBe(true)
  expect(equal(0, -0)).toBe(true)
  expect(equal(0, '0')).toBe(false)
  expect(equal(0, Number.NaN)).toBe(false)
  expect(equal(false, 0)).toBe(false)
  expect(equal(false, '')).toBe(false)
  expect(equal(false, undefined)).toBe(false)
  expect(equal(undefined, null)).toBe(false)
  expect(equal('ab', 'abc')).toBe(false)
  const a = Symbol(1)
  const b = a
  expect(equal(a, b)).toBe(true)
  expect(equal(Symbol(1), Symbol(1))).toBe(true)
})

test('日期判断', () => {
  expect(equal(new Date('1970/01/01'), new Date('1970/01/01'))).toBe(true)
  expect(equal(new Date('1970/01/01'), new Date('1970/01/02'))).toBe(false)
  const now1 = new Date()
  const now2 = new Date()
  expect(equal(now1, now2)).toBe(true)
})

test('正则判断', () => {
  expect(equal(/\d/, /\d/)).toBe(true)
  expect(equal(/\d/, /[0-9]/)).toBe(false)
})

test('对象判断', () => {
  expect(equal({ a: 1 }, { a: 1 })).toBe(true)
  expect(equal({ a: '1' }, { a: 1 })).toBe(false)
  expect(equal({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  expect(
    equal(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 2 } } },
    ),
  ).toBe(true)
  expect(
    equal(
      { a: 1, b: { c: 1, d: { e: 2 } } },
      { a: 1, b: { c: 1, d: { e: 3 } } },
    ),
  ).toBe(false)
})

test('Map判断', () => {
  expect(
    equal(
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
    equal(
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
  expect(equal([1, 2, 3], [1, 2, 3])).toBe(true)
  expect(equal([1, 2], [1, 2, 3])).toBe(false)
  expect(equal([], [])).toBe(true)
  expect(equal([1, 2, 3, '4'], [1, 2, 3, 4])).toBe(false)
  expect(equal([1, 2, 3, '4'], [1, 2, 3])).toBe(false)
  expect(equal([0], [false])).toBe(false)

  expect(
    equal(
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
    equal(
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
  expect(equal(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true)
  expect(equal(new Set([1, 2, 3, '4']), new Set([1, 2, 3, 4]))).toBe(false)
  expect(equal(new Set([1, 2, 3, '4']), new Set([1, 2, 3]))).toBe(false)
  expect(equal(new Set([0]), new Set([false]))).toBe(false)

  expect(
    equal(
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
    equal(
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
    equal(
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
    equal(
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
    equal(
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
    equal(
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
    equal(
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
