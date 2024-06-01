import { expect, test } from 'bun:test'
import { createArray } from '../../src'

test('创建空数组', () => {
  const list = createArray()
  expect(list).toEqual([])
  expect(list.length).toEqual(0)
})

test('创建空数组', () => {
  const list = createArray(2)
  expect(list).toEqual([])
  expect(list.length).toEqual(2)
})

test('创建填充元素数组', () => {
  const list = createArray(2, 0)
  expect(list).toEqual([0, 0])
})

test('创建复杂填充元素数组', () => {
  expect(createArray(2, (i) => i * 2)).toEqual([0, 2])
  expect(createArray(2, { a: 1 })).toEqual([{ a: 1 }, { a: 1 }])
  expect(createArray(2, (i) => ({ a: i, b: (i + 1) * (i + 2) }))).toEqual([
    { a: 0, b: 2 },
    { a: 1, b: 6 },
  ])
})
