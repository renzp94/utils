import { expect, test } from 'bun:test'
import { difference } from '../../src'

test('参数不是数组', () => {
  expect(difference({ length: 1 } as any, [2, 3])).toEqual([])
  expect(difference([2, 3], { length: 1 } as any)).toEqual([2, 3])
})

test('数组为空', () => {
  expect(difference([], [2, 3])).toEqual([])
  expect(difference([2, 3], [])).toEqual([2, 3])
})

test('过滤基本数据类型', () => {
  expect(difference([1, 2, 3], [2, 3])).toEqual([1])
  expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
  expect(difference([1, 2, false, '1'], ['1'])).toEqual([1, 2, false])
})

test('用key过滤对象数组', () => {
  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1 }],
      'a',
    ),
  ).toEqual([{ a: 2, b: 2 }])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 3 }],
      'a',
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
      ],
      [{ a: 3, b: 1 }],
      'a',
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 1 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1 }],
      ['a', 'b'],
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1 }],
      ['a', 'b'],
    ),
  ).toEqual([{ a: 2, b: 2 }])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1, c: 3 }],
      ['a', 'b'],
    ),
  ).toEqual([{ a: 2, b: 2 }])
})

test('用函数过滤对象数组', () => {
  expect(
    difference(
      [1, { a: 1, b: 1 }],
      [1, 2],
      (target: any, v: any) => target?.a < v?.a,
    ),
  ).toEqual([1, { a: 1, b: 1 }])

  expect(
    difference(
      [1, { a: 1, b: 1 }],
      [{ a: 3, b: 1 }, 2],
      (target: any, v: any) => target?.a < v?.a,
    ),
  ).toEqual([1])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 2 },
      ],
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 2 },
        { a: 2, b: 3 },
      ],
      (target, v) => {
        return target.a === v.a && target.b === v.b
      },
    ),
  ).toEqual([{ a: 3, b: 2 }])

  const list: any = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ]

  const values: any = [{ a: 1 }]

  expect(
    difference(list, values, (target: any, v: any) => {
      target.key = 'key'
      v.key = 'key'
      return target.a < v.a
    }),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  // 判断是否更改了原属数据
  expect(list).toEqual([
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])
  expect(values).toEqual([{ a: 1 }])
})

test('对象没有指定key', () => {
  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1 }],
      'c' as any,
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1, c: 3 }],
      'c',
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1, c: 1 },
        { a: 2, b: 2, c: 2 },
      ],
      [{ a: 1, b: 1 }],
      'c',
    ),
  ).toEqual([
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 2, c: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1 }],
      ['c' as any],
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
      ],
      [{ a: 1, b: 1, c: 3 }],
      ['c'],
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ])

  expect(
    difference(
      [
        { a: 1, b: 1, c: 1 },
        { a: 2, b: 2, c: 2 },
      ],
      [{ a: 1, b: 1 }],
      ['c'],
    ),
  ).toEqual([
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 2, c: 2 },
  ])
})
