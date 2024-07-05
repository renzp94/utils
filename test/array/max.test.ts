import { expect, test } from 'bun:test'
import { max } from '../../src'

test('获取不是数组/Set的最大值', () => {
  expect(max({ 1: 1, 2: 2, 3: 3 } as any)).toBeUndefined()
})

test('获取Array<number>最大值', () => {
  expect(max([1, 2, 3, 4])).toEqual(4)
})

test('获取Set<number>最大值', () => {
  expect(max(new Set([1, 2, 3, 4]))).toEqual(4)
})

test('获取Array<string>最大值', () => {
  expect(max(['a', 'b', 'c', 'd'])).toEqual('d')
  expect(max(['ab', 'b', 'c', 'd'])).toEqual('ab')
})

test('获取Set<string>最大值', () => {
  expect(max(new Set(['a', 'b', 'c', 'd']))).toEqual('d')
  expect(max(new Set(['ab', 'b', 'c', 'd']))).toEqual('ab')
})

test('获取Array<string | number>最大值', () => {
  expect(max([1, '2', '3', 4, '5'])).toEqual('5')
  expect(max([1, '2', 'b', 4, '5'])).toEqual('b')
  expect(max([1, '21', 'b', 4, '5'])).toEqual('21')
})

test('获取Set<string | number>最大值', () => {
  expect(max(new Set([1, '2', '3', 4, '5']))).toEqual('5')
  expect(max(new Set([1, '2', 'b', 4, '5']))).toEqual('b')
  expect(max(new Set([1, '21', 'b', 4, '5']))).toEqual('21')
})

test('获取Array<对象>最大值', () => {
  const list = [
    { name: '张三', age: 12, hobby: [] },
    { name: '李四', age: 20, hobby: [] },
    { name: '王小五', age: 18, hobby: [] },
  ]
  expect(max(list, 'age')).toEqual({ name: '李四', age: 20, hobby: [] })

  expect(max(list, (v) => v.name)).toEqual({
    name: '王小五',
    age: 18,
    hobby: [],
  })

  expect(max(list, 'hobby')).toBeUndefined()
})

test('获取Set<对象>最大值', () => {
  const list = new Set([
    { name: '张三', age: 12, hobby: [] },
    { name: '李四', age: 20, hobby: [] },
    { name: '王小五', age: 18, hobby: [] },
  ])
  expect(max(list, 'age')).toEqual({ name: '李四', age: 20, hobby: [] })

  expect(max(list, (v) => v.name)).toEqual({
    name: '王小五',
    age: 18,
    hobby: [],
  })

  expect(max(list, 'hobby')).toBeUndefined()
})
