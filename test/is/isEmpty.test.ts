import { expect, test } from 'bun:test'
import { isEmpty } from '../../src'

test('根据类型判断是否为空', () => {
  expect(isEmpty(null)).toBeTrue()
  expect(isEmpty(undefined)).toBeTrue()
  expect(isEmpty(true)).toBeTrue()
  expect(isEmpty(false)).toBeTrue()
  expect(isEmpty(Symbol(1))).toBeTrue()
  expect(isEmpty(() => [])).toBeTrue()
})

test('判断数字是否为空', () => {
  expect(isEmpty(0)).toBeFalse()
  expect(isEmpty(-1)).toBeFalse()
  expect(isEmpty(1)).toBeFalse()
  expect(isEmpty(Number.NaN)).toBeTrue()
})

test('判断时间是否为空', () => {
  expect(isEmpty(new Date())).toBeFalse()
  expect(isEmpty(new Date('asdas'))).toBeTrue()
})

test('判断Map和Set是否为空', () => {
  expect(isEmpty(new Map())).toBeTrue()
  expect(isEmpty(new Map([['a', 1]]))).toBeFalse()
  expect(isEmpty(new Set())).toBeTrue()
  expect(isEmpty(new Set([]))).toBeTrue()
  expect(isEmpty(new Set([1, 2]))).toBeFalse()
})

test('判断WeakMap和WeakSet是否为空', () => {
  expect(() => {
    isEmpty(new WeakMap())
  }).toThrowError('isEmpty不支持WeakMap和WeakSet类型的数据')
  expect(() => {
    isEmpty(new WeakSet())
  }).toThrowError('isEmpty不支持WeakMap和WeakSet类型的数据')
})

test('判断对象是否为空', () => {
  expect(isEmpty({})).toBeTrue()
  expect(isEmpty({ length: 0 })).toBeFalse()
  expect(isEmpty(new Set([]))).toBeTrue()
  expect(isEmpty(new Set([1, 2]))).toBeFalse()
  class Obj {
    name?: string
    age?: number
    constructor(name?: string, age?: number) {
      this.name = name
      this.age = age
    }
  }
  const obj1 = new Obj('test', 1)
  expect(isEmpty(obj1)).toBeFalse()
  const obj2 = new Obj()
  expect(isEmpty(obj2)).toBeFalse()

  class ObjEmpty {}
  const objEmpty1 = new ObjEmpty()
  expect(isEmpty(objEmpty1)).toBeTrue()
  class ObjEmptyExtend extends Obj {}
  const objEmptyExtend1 = new ObjEmptyExtend()
  expect(isEmpty(objEmptyExtend1)).toBeFalse()
})

test('判断对象是否为空', () => {
  expect(isEmpty({})).toBeTrue()
  expect(isEmpty({ length: 0 })).toBeFalse()
  expect(isEmpty(new Set([]))).toBeTrue()
  expect(isEmpty(new Set([1, 2]))).toBeFalse()
  class Obj {
    name?: string
    age?: number
    constructor(name?: string, age?: number) {
      this.name = name
      this.age = age
    }
  }
  const obj1 = new Obj('test', 1)
  expect(isEmpty(obj1)).toBeFalse()
  const obj2 = new Obj()
  expect(isEmpty(obj2)).toBeFalse()

  class ObjEmpty {}
  const objEmpty1 = new ObjEmpty()
  expect(isEmpty(objEmpty1)).toBeTrue()
  class ObjEmptyExtend extends Obj {}
  const objEmptyExtend1 = new ObjEmptyExtend()
  expect(isEmpty(objEmptyExtend1)).toBeFalse()
})

test('判断数组是否为空', () => {
  expect(isEmpty([])).toBeTrue()
  expect(isEmpty([1, 2])).toBeFalse()
})

test('判断Buffer是否为空', () => {
  expect(isEmpty(new Buffer('21231'))).toBeFalse()
  expect(isEmpty(new Buffer(''))).toBeTrue()
  expect(isEmpty(new ArrayBuffer(12))).toBeFalse()
  expect(isEmpty(new ArrayBuffer(0))).toBeTrue()
})
