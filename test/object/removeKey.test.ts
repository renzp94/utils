import { expect, test } from 'bun:test'
import { removeKey } from '../../src'

test('移除对象属性', () => {
  const a = { a: 1, b: 2 }
  const b = removeKey(a, 'a')
  expect(a).toEqual({ a: 1, b: 2 })
  expect(b).toEqual({ b: 2 })
})

test('传入的不是对象', () => {
  expect(removeKey([], 'a' as any)).toEqual([])
})
