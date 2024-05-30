import { expect, test } from 'bun:test'
import { deepClone, radom, uuid } from '../src'

test('复制基本数据类型', () => {
  const str = 'hello'
  let newStr = deepClone(str)
  expect(newStr).toBe(str)
  newStr += ' world'
  expect(newStr).toBe('hello world')
  expect(str).toBe('hello')
})

test('复制对象', () => {
  const obj: any = { a: 1 }
  const newObj = deepClone(obj)
  newObj.b = 2

  expect(newObj).not.toBe(obj)
  expect(newObj).toEqual({ a: 1, b: 2 })
  expect(obj).toEqual({ a: 1 })
})

test('复制多层对象', () => {
  const obj: any = { a: 1, b: { c: 3, d: { e: 4 } }, f: [4] }
  const newObj = deepClone(obj)
  newObj.b.d.e = 0
  newObj.b.c = 0
  newObj.f.push(0)

  expect(newObj).not.toBe(obj)
  expect(newObj).toEqual({ a: 1, b: { c: 0, d: { e: 0 } }, f: [4, 0] })
  expect(obj).toEqual({ a: 1, b: { c: 3, d: { e: 4 } }, f: [4] })
})

test('复制数组', () => {
  const arr = [1, 2, 3]
  const newArr = deepClone(arr)
  newArr.push(4)

  expect(newArr).not.toBe(arr)
  expect(newArr).toEqual([1, 2, 3, 4])
  expect(arr).toEqual([1, 2, 3])
})

test('复制对象数组', () => {
  const list: any = [{ a: 1 }, { a: 2 }]
  const newList = deepClone(list).map((item: any) => {
    item.b = item.a * 2

    return item
  })

  expect(newList).not.toBe(list)
  expect(newList).toEqual([
    { a: 1, b: 2 },
    { a: 2, b: 4 },
  ])
  expect(list).toEqual([{ a: 1 }, { a: 2 }])
})

test('复制日期', () => {
  const date = new Date('1970-01-01')
  const newDate = deepClone(date)
  newDate.setFullYear(2020)

  expect(newDate).not.toBe(date)
  expect(newDate.getFullYear()).toEqual(2020)
  expect(date.getFullYear()).toEqual(1970)
})

test('复制Map', () => {
  const map = new Map([['a', 1]])
  const newMap = deepClone(map)
  newMap.set('a', 2)

  expect(newMap).not.toBe(map)
  expect(newMap.get('a')).toEqual(2)
  expect(map.get('a')).toEqual(1)
})

test('复制Set', () => {
  const set = new Set([1])
  const newSet = deepClone(set)
  newSet.add(2)

  expect(newSet).not.toBe(set)
  expect(newSet).toEqual(new Set([1, 2]))
  expect(set).toEqual(new Set([1]))
})

test('生成随机数', () => {
  expect(radom(100, 10000)).toBeNumber()
  expect(radom(1, 35)).toBeGreaterThan(1)
  expect(radom(1, 35)).toBeLessThan(35)
  expect(radom(100, 10000, 0)).toBeInteger()
})

test('生成UUID', () => {
  expect(uuid()).toHaveLength(36)
  expect(
    /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/.test(
      uuid(),
    ),
  ).toBeTrue()
  expect(/[A-Z]/.test(uuid(true))).toBeTrue()
})
