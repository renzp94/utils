import { expect, test } from 'bun:test'
import { CHAIN_FNS, chain } from '../../src'

const str = '2,5,7,20,23,24,25,29,35,36'
const toArray = (v: string) => v.split(',')
const toNumber = (list: Array<string>) => list.map(Number)
const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0)
const greet = (list: Array<number>, min: number) => list.filter((v) => v > min)
const _toString = (list: Array<number>) => list.toString()

test('获取逗号分隔数字的字符串中的逗号分隔偶数的字符串', () => {
  const chainFn = chain(
    {
      toArray,
      toNumber,
      getEven,
      toString: _toString,
    },
    str,
  )
  expect(chainFn.value).toBeUndefined()
  expect(chainFn.toArray.toNumber.getEven.toString.value).toEqual('2,20,24,36')
})

test('获取逗号分隔数字的字符串中的逗号分隔偶数且大于10和大于30的两个字符串', () => {
  const chainFn = chain(
    {
      toArray,
      toNumber,
      getEven,
      greet,
      toString: _toString,
    },
    str,
  )

  expect(
    chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(10).toString.value,
  ).toEqual('20,24,36')
  expect(
    chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(30).toString.value,
  ).toEqual('36')
})

test('chain设置默认值', () => {
  const chainFn = chain(
    {
      toArray,
      toNumber,
      getEven,
      greet,
      toString: _toString,
    },
    str,
    '100',
  )

  expect(chainFn.toArray.toNumber.getEven.toString.value).toEqual('2,20,24,36')
  expect(
    chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(40).toString.value,
  ).toEqual('100')
})

test('chain传入的fns不是对象或对象的属性值不是函数', () => {
  expect(() => {
    chain([] as any)
  }).toThrowError('参数fns需要是一个对象且对象的属性值需要是函数')
  expect(() => {
    chain({ a: 1 } as any)
  }).toThrowError('参数fns需要是一个对象且对象的属性值需要是函数')
})
