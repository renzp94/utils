import { expect, test } from 'bun:test'
import { createArray, objectify } from '../../src'

test('传入的数据不是数组', () => {
  expect(() => {
    objectify({ a: 1 } as any, 'a' as any)
  }).toThrowError('参数list需要是一个数组')
})

test('数组中有不是对象的数据', () => {
  expect(() => {
    objectify([1 as any, { a: 1 }], 'a')
  }).toThrowError('参数list数组中的每个元素应该是对象')
})

test('指定key转对象', () => {
  type Obj = {
    key: string
    name: string
    value: string
  }
  const list = createArray(3, (i) => ({
    key: `key_${i}`,
    name: `name_${i}`,
    value: `value_${i}`,
  }))

  expect(objectify(list, 'key')).toEqual({
    key_0: {
      key: 'key_0',
      name: 'name_0',
      value: 'value_0',
    },
    key_1: {
      key: 'key_1',
      name: 'name_1',
      value: 'value_1',
    },
    key_2: {
      key: 'key_2',
      name: 'name_2',
      value: 'value_2',
    },
  })

  expect(objectify<Obj, keyof Obj, string>(list, 'key', 'value')).toEqual({
    key_0: 'value_0',
    key_1: 'value_1',
    key_2: 'value_2',
  })
})

test('使用函数指定key转对象', () => {
  const list = createArray(3, (i) => ({
    key: `key_${i}`,
    name: `name_${i}`,
    value: `value_${i}`,
  }))

  expect(objectify(list, (v) => `p_${v.key}`)).toEqual({
    p_key_0: {
      key: 'key_0',
      name: 'name_0',
      value: 'value_0',
    },
    p_key_1: {
      key: 'key_1',
      name: 'name_1',
      value: 'value_1',
    },
    p_key_2: {
      key: 'key_2',
      name: 'name_2',
      value: 'value_2',
    },
  })
})

test('使用函数指定value转对象', () => {
  type Obj = {
    key: string
    name: string
    value: string
  }
  const list = createArray(3, (i) => ({
    key: `key_${i}`,
    name: `name_${i}`,
    value: `value_${i}`,
  }))

  expect(
    objectify<Obj, keyof Obj, Omit<Obj, 'key'>>(list, 'key', (v) => ({
      value: v.value,
      name: v.name,
    })),
  ).toEqual({
    key_0: {
      name: 'name_0',
      value: 'value_0',
    },
    key_1: {
      name: 'name_1',
      value: 'value_1',
    },
    key_2: {
      name: 'name_2',
      value: 'value_2',
    },
  })
})

test('key不是PropertyKey类型', () => {
  const list = createArray(3, (i) => ({
    key: { a: 1 },
    name: `name_${i}`,
    value: `value_${i}`,
  }))

  expect(() => {
    objectify(list, 'key')
  }).toThrowError('参数k类型需要是string/number/symbol类型')
})
