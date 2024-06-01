import { expect, test } from 'bun:test'
import { first } from '../../src'

test('获取第一个元素', () => {
  expect(first([1, 2, 3])).toEqual(1)
  expect(first([1, 2, 3], 4)).toEqual(1)
  expect(first([], 2)).toEqual(2)
  expect(first([])).toEqual(undefined)
  expect(first({ '0': 1 } as any)).toEqual(undefined)
  expect(first({ '0': 1 } as any, 2)).toEqual(2)
})
