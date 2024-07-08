import { expect, test } from 'bun:test'
import { compose } from '../../src'

const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0)
const great20 = (list: Array<number>) => list.filter((v) => v > 20)
const _toString = <T>(list: Array<T>) => list.toString()
const list = [2, 5, 7, 20, 23, 24, 25, 29, 35, 36]

test('获取偶数且大于20', () => {
  const fn = compose(great20, getEven)
  expect(fn(list)).toEqual([24, 36])
})

test('获取偶数且大于20并且数组转字符串', () => {
  const fn = compose(great20, getEven)
  const fn1 = compose(_toString, fn)
  expect(fn1(list)).toEqual('24,36')
})

test('获取大写字母并且将数组转为code数组最后转字符串', () => {
  const list = ['a', 'A', 'C', 'd', 't', 'W']
  const getUpperChar = (list: Array<string>) =>
    list.filter((v) => /[A-Z]/.test(v))
  const toCode = (list: Array<string>) => list.map((v) => v.charCodeAt(0))
  const fn = compose(_toString, toCode, getUpperChar)
  expect(fn(list)).toEqual('65,67,87')
})

test('参数中有不是函数的', () => {
  expect(() => {
    compose(1 as any)
  }).toThrowError('参数应全是函数')
})
