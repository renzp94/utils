import { expect, test } from 'bun:test'
import { last } from '../../src'

test('获取最后一个元素', () => {
  expect(last([1, 2, 3])).toEqual(3)
  expect(last([1, 2, 3], 4)).toEqual(3)
  expect(last([], 2)).toEqual(2)
  expect(last([])).toEqual(undefined)
  expect(last({ '0': 1 } as any)).toEqual(undefined)
  expect(last({ '0': 1 } as any, 2)).toEqual(2)
})
