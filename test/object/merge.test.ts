import { expect, test } from 'bun:test'
import { merge } from '../../src'

test('合并对象', () => {
  expect(merge({ a: 1 }, { b: 1 })).toEqual({
    a: 1,
    b: 1,
  })
  expect(merge({ a: 1, b: { a: 1 } }, { b: 1 })).toEqual({ a: 1, b: 1 })
  expect(merge({ a: 1, b: 1 }, { b: { a: 1 } })).toEqual({ a: 1, b: { a: 1 } })
  expect(merge({ a: 1 }, { a: 2, b: 1, c: false })).toEqual({
    a: 2,
    b: 1,
    c: false,
  })
})

test('深度合并对象', () => {
  expect(
    merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } }, { deep: false }),
  ).toEqual({
    a: 1,
    b: { c: 2 },
  })
  expect(merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } })).toEqual({
    a: 1,
    b: { c: 2, d: 1 },
  })
})

test('合并不是对象的数据', () => {
  expect(merge(1, { b: 1 })).toEqual(1)
  expect(merge(1, 2)).toEqual(1)
  expect(merge([], { b: 1 })).toEqual([])
  const map = new Map()
  expect(merge(map, { b: 1 })).toEqual(map)
  expect(merge([1], [2])).toEqual([1])
})

test('自定义对象', () => {
  expect(
    merge(
      { a: [1], b: [2] },
      { a: [3], b: [4] },
      {
        value: (targetValue, sourceValue) => [...targetValue, ...sourceValue],
      },
    ),
  ).toEqual({
    a: [1, 3],
    b: [2, 4],
  })
})
