import { expect, test } from 'bun:test'
import { emailValidator } from '../../src'

test('emailValidator', () => {
  expect(emailValidator('lisi@qq.com')).toBe(true)
  expect(emailValidator('wangwu@163.com')).toBe(true)
  expect(emailValidator('xiaoli@gmail.com')).toBe(true)
  expect(emailValidator('lisi@qq')).toBe(false)
})
