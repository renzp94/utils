import { expect, test } from 'bun:test'
import { unique } from '../../src'

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
      { filter: 'a' },
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
      { filter: 'b' },
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
      { filter: ['a', 'b'] },
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
      { filter: (target, v) => target.a === v.a && target.b === v.b },
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
      { filter: (target, v) => target.a === v.a && target.b === v.b },
    ),
  ).toEqual([
    { a: 1, b: 1, c: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
  ])
})

test('不是数组去重', () => {
  expect(unique({ length: 1 } as any)).toEqual({ length: 1 } as any)
})

test('非严格比较', () => {
  expect(unique([1, 1, '1', 2, 3, 4, 3], { strict: false })).toEqual([
    1, 2, 3, 4,
  ])

  expect(
    unique(
      [
        { a: 1, b: 1 },
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 1, b: 1 },
        { a: '1', b: 1 },
      ],
      { filter: 'a', strict: false },
    ),
  ).toEqual([
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
  ])
})
