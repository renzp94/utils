import { expect, test } from 'bun:test'
import { createArray } from '../../src'

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
