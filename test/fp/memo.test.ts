import { expect, test } from 'bun:test'
import { memo } from '../../src'

test('参数不是函数函数', () => {
  expect(() => {
    memo(1 as any)
  }).toThrowError('参数fn应该为函数')
})

test('缓存函数', () => {
  let runCount = 0
  const add = (a: number, b: number) => {
    runCount++
    return a + b
  }
  const addMemo = memo(add)

  const count1 = addMemo(1, 1)
  const count2 = addMemo(1, 1)

  expect(count1).toEqual(2)
  expect(count2).toEqual(2)
  expect(runCount).toEqual(1)
  addMemo.clear()
  const count3 = addMemo(1, 1)
  expect(count3).toEqual(2)
  expect(runCount).toEqual(2)
})

test('设置最大缓存量', () => {
  let runCount = 0
  const add = (a: number, b: number) => {
    runCount++
    return a + b
  }
  const addMemo = memo(add, { max: 3 })

  // +1
  addMemo(1, 1)
  addMemo(1, 1)
  // +1
  addMemo(2, 2)
  addMemo(2, 2)
  // +1
  addMemo(3, 3)
  addMemo(3, 3)
  expect(runCount).toEqual(3)
  // +1
  addMemo(4, 4)
  // +1
  addMemo(1, 1)
  addMemo(1, 1)
  addMemo(1, 1)
  expect(runCount).toEqual(5)
})

test('自定义缓存key', () => {
  let runCount = 0
  const add = (a: number, b: number) => {
    runCount++
    return a + b
  }
  const addMemo = memo(add, { key: (a) => a })

  // +1
  addMemo(1, 1)
  addMemo(1, 2)
  addMemo(1, 3)
  expect(runCount).toEqual(1)
})

test('删除指定缓存', () => {
  let runCount = 0
  const add = (a: number, b: number) => {
    runCount++
    return a + b
  }
  const addMemo = memo(add)

  // +1
  addMemo(1, 1)
  addMemo(1, 1)
  // +1
  addMemo(2, 2)
  addMemo(2, 2)
  expect(runCount).toEqual(2)
  addMemo.remove([1, 1])
  // +1
  addMemo(1, 1)
  addMemo(1, 1)
  expect(runCount).toEqual(3)
})

test('设置缓存值', () => {
  const add = (a: number, b: number) => a + b
  const addMemo = memo(add)
  addMemo.set([1, 1], 10)

  const count = addMemo(1, 1)
  expect(count).toEqual(10)
})
