import { expect, test } from 'bun:test'
import { difference } from '../../src'

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
