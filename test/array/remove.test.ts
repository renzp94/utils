import { expect, test } from 'bun:test'
import { remove } from '../../src'

test('删除指定下标', () => {
  expect(remove([1, 2, 3], 1)).toEqual([[1, 3], [2]])
})

test('删除指定小数下标', () => {
  expect(remove([1, 2, 3], 1.4)).toEqual([[1, 3], [2]])
  expect(remove([1, 2, 3], 1.8)).toEqual([[1, 3], [2]])
})

test('删除指定负数下标', () => {
  expect(remove([1, 2, 3], -1)).toEqual([[1, 2], [3]])
})

test('删除指定超长下标', () => {
  expect(remove([1, 2, 3], 4)).toEqual([[1, 2, 3], []])
  expect(remove([1, 2, 3], -8)).toEqual([[1, 2, 3], []])
})

test('删除指定元素', () => {
  expect(remove([1, 2, 3], [1, 2])).toEqual([[3], [1, 2]])
})

test('自定义删除规则', () => {
  expect(remove([1, 2, 3, 4, 5], (v) => v % 2 === 0)).toEqual([
    [1, 3, 5],
    [2, 4],
  ])

  expect(
    remove(
      [
        { a: 1, b: 2 },
        { a: 2, b: 4 },
        { a: 3, b: 6 },
        { a: 4, b: 8 },
        { a: 5, b: 10 },
      ],
      (v) => v.a >= 2 && v.b <= 8,
    ),
  ).toEqual([
    [
      { a: 1, b: 2 },
      { a: 5, b: 10 },
    ],
    [
      { a: 2, b: 4 },
      { a: 3, b: 6 },
      { a: 4, b: 8 },
    ],
  ])
})

test('删除数组不更改源数组', () => {
  const a = [1, 2, 3]
  expect(remove(a, 1)).toEqual([[1, 3], [2]])
  expect(a).toEqual([1, 2, 3])

  const b = [
    { a: 1, b: 2 },
    { a: 2, b: 4 },
    { a: 3, b: 6 },
    { a: 4, b: 8 },
    { a: 5, b: 10 },
  ]

  expect(
    remove(b, (v: any, index) => {
      v.key = `key_${index + 1}`
      return v.a >= 2 && v.b <= 8
    }),
  ).toEqual([
    [
      { key: 'key_1', a: 1, b: 2 },
      { key: 'key_5', a: 5, b: 10 },
    ],
    [
      { key: 'key_2', a: 2, b: 4 },
      { key: 'key_3', a: 3, b: 6 },
      { key: 'key_4', a: 4, b: 8 },
    ],
  ])

  expect(b).toEqual([
    { a: 1, b: 2 },
    { a: 2, b: 4 },
    { a: 3, b: 6 },
    { a: 4, b: 8 },
    { a: 5, b: 10 },
  ])
})

test('传入的不是数组', () => {
  expect(() => {
    remove({ length: 10 } as any, 4)
  }).toThrowError('参数list需要是一个数组类型')
})
