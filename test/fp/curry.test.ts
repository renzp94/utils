import { expect, test } from 'bun:test'
import { curry } from '../../src'

const add = (a: number, b: number, c: number) => {
  return a + b + c
}

test('1 + 2 + 3 = 6', () => {
  const a = curry(add)
  const b = a(1)
  const c = b(2)
  const num = c(3)

  expect(num).toBe(6)
})

test('(1 + 2) + 3 = 6', () => {
  const a = curry(add)
  const b = a(1, 2)
  const num = b(3)

  expect(num).toBe(6)
})

test('(1 + 2 + 3) = 6', () => {
  const a = curry(add)
  const num = a(1, 2, 3)

  expect(num).toBe(6)
})

const mergeList = (a: number, b: boolean, c: string) => [a, b, c]

test('1 true "a" = [1,true,"a"]', () => {
  const a = curry(mergeList)
  const b = a(1)
  const c = b(true)
  const result = c('a')

  expect(result).toEqual([1, true, 'a'])
})

const regValidator = (regExp: RegExp, v: string) => regExp.test(v)

test('正则判断手机号,邮箱', () => {
  const createValidator = curry(regValidator)
  const phoneValidator = createValidator(/^1[3-9]\d{9}$/)
  const emailValidator = createValidator(
    /^[a-zA-Z0-9_\.\-\+]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
  )

  expect(createValidator(/^1[3-9]\d{9}$/, '13311111111')).toBeTrue()
  expect(phoneValidator('13311111111')).toBeTrue()
  expect(emailValidator('lisi@qq.com')).toBeTrue()
})

test('传入的不是函数', () => {
  expect(() => {
    curry(1 as any)
  }).toThrowError('参数fn需要是一个函数')
})
