import { expect, test } from 'bun:test'
import { xor } from '../../src'

test('基本数据类型合取补集', () => {
  expect(xor([1, 1, 2, 3], [4, 3])).toEqual([1, 1, 2, 4])
  expect(xor([1, false, 2], [false, 4, 1])).toEqual([2, 4])
  expect(xor([1, 2, 3], [4, 3, '1'])).toEqual([1, 2, 4, '1'])
})

test('对象数组单个属性对比取补集', () => {
  expect(
    xor(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
      ],
      [
        { a: 1, b: 1 },
        { a: 2, b: 2 },
        { a: 3, b: 3 },
        { a: 3, b: 2 },
      ],
      { filter: 'a' },
    ),
  ).toEqual([])

  expect(
    xor(
      [
        { a: 0, b: 1 },
        { a: 0, b: 1 },
        { a: 0, b: 1 },
        { a: 1, b: 2 },
        { a: 2, b: 3 },
        { a: 3, b: 4 },
      ],
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 2, b: 5 },
      ],
      { filter: 'b' },
    ),
  ).toEqual([
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
    { a: 2, b: 5 },
  ])
})

test('对象数组多个属性对比取补集', () => {
  expect(
    xor(
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
      { filter: ['a', 'b'] },
    ),
  ).toEqual([
    { a: 3, b: 2 },
    { a: 1, b: 2 },
    { a: 2, b: 3 },
  ])
})

test('对象数组使用filter函数对别取补集', () => {
  expect(
    xor(
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
      {
        filter: (target, v) => target.a === v.a && target.b === v.b,
      },
    ),
  ).toEqual([
    { a: 3, b: 2 },
    { a: 1, b: 2 },
    { a: 2, b: 3 },
  ])

  expect(
    xor(
      [
        { a: 1, b: 1, c: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1, c: 2 },
      ],
      [
        { a: 1, b: 1, c: 4 },
        { a: 3, b: 1 },
        { a: 2, b: 1, c: 2 },
      ],
      { filter: (target, v) => target.a === v.a && target.b === v.b },
    ),
  ).toEqual([])
})

test('不是数组取补集', () => {
  expect(xor({ length: 1 } as any)).toEqual([])
})

test('不传任何参数取补集', () => {
  expect(xor()).toEqual([])
})
