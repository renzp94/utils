import { expect, test } from 'bun:test'
import { isNumber, omit } from '../../src'

test('移除对象属性', () => {
  const a = { a: 1, b: 2 }
  const b = omit(a, ['a'])
  expect(a).toEqual({ a: 1, b: 2 })
  expect(b).toEqual({ b: 2 })
})

test('传入的不是对象', () => {
  expect(omit([], 'a' as any)).toEqual([])
})

test('自定义函数移除对象属性', () => {
  expect(omit({ a: 1, b: 2, c: '3' }, isNumber)).toEqual({ c: '3' })
})
