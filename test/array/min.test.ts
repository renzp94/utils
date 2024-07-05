import { expect, test } from 'bun:test'
import { min } from '../../src'

test('获取不是数组/Set的最小值', () => {
  expect(min({ 1: 1, 2: 2, 3: 3 } as any)).toBeUndefined()
})

test('获取Array<number>最小值', () => {
  expect(min([1, 2, 3, 4])).toEqual(1)
})

test('获取Set<number>最小值', () => {
  expect(min(new Set([1, 2, 3, 4]))).toEqual(1)
})

test('获取Array<string>最小值', () => {
  expect(min(['a', 'b', 'c', 'd'])).toEqual('a')
  expect(min(['ab', 'b', 'c', 'd'])).toEqual('b')
})

test('获取Set<string>最小值', () => {
  expect(min(new Set(['a', 'b', 'c', 'd']))).toEqual('a')
  expect(min(new Set(['ab', 'b', 'c', 'd']))).toEqual('b')
})

test('获取Array<string | number>最小值', () => {
  expect(min([1, '2', '3', 4, '5'])).toEqual(1)
  expect(min([1, '2', 'b', 4, '5'])).toEqual(1)
  expect(min([1, '21', 'b', 4, '5'])).toEqual(1)
})

test('获取Set<string | number>最小值', () => {
  expect(min(new Set([1, '2', '3', 4, '5']))).toEqual(1)
  expect(min(new Set([1, '2', 'b', 4, '5']))).toEqual(1)
  expect(min(new Set([1, '21', 'b', 4, '5']))).toEqual(1)
})

test('获取Array<对象>最小值', () => {
  const list = [
    { name: '张小三', age: 12, hobby: [] },
    { name: '李四', age: 20, hobby: [] },
    { name: '王小五', age: 18, hobby: [] },
  ]
  expect(min(list, 'age')).toEqual({ name: '张小三', age: 12, hobby: [] })

  expect(min(list, (v) => v.name)).toEqual({ name: '李四', age: 20, hobby: [] })

  expect(min(list, 'hobby')).toBeUndefined()
})

test('获取Set<对象>最小值', () => {
  const list = new Set([
    { name: '张小三', age: 12, hobby: [] },
    { name: '李四', age: 20, hobby: [] },
    { name: '王小五', age: 18, hobby: [] },
  ])
  expect(min(list, 'age')).toEqual({ name: '张小三', age: 12, hobby: [] })

  expect(min(list, (v) => v.name)).toEqual({ name: '李四', age: 20, hobby: [] })

  expect(min(list, 'hobby')).toBeUndefined()
})
