import { expect, test } from 'bun:test'
import { createArray, difference, first, flatten, last, unique } from '../src'

test('创建数组', () => {
  expect(createArray(2)).toEqual([])
  expect(createArray(2).length).toEqual(2)
  expect(createArray(2, 0)).toEqual([0, 0])
  expect(createArray(2, (i) => i * 2)).toEqual([0, 2])
  expect(createArray(2, { a: 1 })).toEqual([{ a: 1 }, { a: 1 }])
  expect(createArray(2, (i) => ({ a: i, b: (i + 1) * (i + 2) }))).toEqual([
    { a: 0, b: 2 },
    { a: 1, b: 6 },
  ])
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

test('获取第一个元素', () => {
  expect(first([1, 2, 3])).toEqual(1)
  expect(first([1, 2, 3], 4)).toEqual(1)
  expect(first([], 2)).toEqual(2)
  expect(first([])).toEqual(undefined)
  expect(first({ '0': 1 } as any)).toEqual(undefined)
  expect(first({ '0': 1 } as any, 2)).toEqual(2)
})

test('默认深度扁平化数组', () => {
  expect(flatten([[1], 2, [3]])).toEqual([1, 2, 3])
  expect(flatten([[1, 2], 3, [4, [5]]])).toEqual([1, 2, 3, 4, 5])
})

test('depth <= 0不扁平化', () => {
  expect(flatten([[1], 2, [3]], { depth: 0 })).toEqual([[1], 2, [3]])
  expect(flatten([[1], 2, [3]], { depth: -1 })).toEqual([[1], 2, [3]])
})

test('深度扁平化数组', () => {
  expect(flatten([[1, [2, [3, [4, [5]]]]], 6, [7, [8, [9]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ])
  expect(flatten([[1, 2], 3, [4, [5]]], { depth: 1 })).toEqual([
    1,
    2,
    3,
    4,
    [5],
  ])
})

test('深度扁平化对象数组', () => {
  expect(
    flatten(
      [
        {
          label: '1-1',
          value: '1-1',
          children: [
            {
              label: '2-1',
              value: '2-1',
              children: [{ label: '3-1', value: '3-1' }],
            },
            { label: '2-2', value: '2-2' },
          ],
        },
        { label: '1-2', value: '1-2' },
      ],
      { deepKey: 'children' },
    ),
  ).toEqual([
    {
      label: '1-1',
      value: '1-1',
    },
    {
      label: '2-1',
      value: '2-1',
    },
    { label: '3-1', value: '3-1' },
    { label: '2-2', value: '2-2' },
    { label: '1-2', value: '1-2' },
  ])
})

test('获取最后一个元素', () => {
  expect(last([1, 2, 3])).toEqual(3)
  expect(last([1, 2, 3], 4)).toEqual(3)
  expect(last([], 2)).toEqual(2)
  expect(last([])).toEqual(undefined)
  expect(last({ '0': 1 } as any)).toEqual(undefined)
  expect(last({ '0': 1 } as any, 2)).toEqual(2)
})

test('基本数据类型去重', () => {
  expect(unique([1, 1, 2, 3, 4, 3])).toEqual([1, 2, 3, 4])
  expect(unique([1, false, 2, false, 4, 1])).toEqual([1, false, 2, 4])
  expect(unique([1, '1', 2, 3, 4, 3])).toEqual([1, '1', 2, 3, 4])
})

test('对象数组去重', () => {
  expect(
    unique(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1 },
      ],
      'a',
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
  ])

  expect(
    unique(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1 },
      ],
      'b',
    ),
  ).toEqual([{ a: 1, b: 1 }])

  expect(
    unique(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 2 },
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 2 },
      ],
      ['a', 'b'],
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
    { a: 1, b: 2 },
    { a: 3, b: 2 },
  ])

  expect(
    unique(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1 },
      ],
      (target, v) => target.a === v.a && target.b === v.b,
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
  ])

  expect(
    unique(
      [
        { a: 1, b: 1, c: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1, c: 2 },
      ],
      (target, v) => target.a === v.a && target.b === v.b,
    ),
  ).toEqual([
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
  ])
})
