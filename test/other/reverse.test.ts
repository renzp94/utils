import { expect, test } from 'bun:test'
import { reverse } from '../../src'

test('反转字符串', () => {
  expect(reverse('Hello World!')).toEqual('!dlroW olleH')
})

test('反转数组', () => {
  expect(reverse([1, 2, false, '1', '2', 0, { a: 1 }])).toEqual([
    { a: 1 },
    0,
    '2',
    '1',
    false,
    2,
    1,
  ])
})

test('反转Set', () => {
  expect(reverse(new Set([1, 2, false, '1', '2', 0, { a: 1 }]))).toEqual(
    new Set([{ a: 1 }, 0, '2', '1', false, 2, 1]),
  )
})

test('反转其他类型', () => {
  expect(reverse(123 as any)).toEqual(123)
})
