import { expect, test } from 'bun:test'
import { pick } from '../../src'

test('传入的不是对象', () => {
  expect(pick([], ['a'] as any)).toEqual([])
})

test('移除对象属性', () => {
  const a = { a: 1, b: 2 }
  const b = pick(a, ['a'])
  expect(a).toEqual({ a: 1, b: 2 })
  expect(b).toEqual({ a: 1 })
})
