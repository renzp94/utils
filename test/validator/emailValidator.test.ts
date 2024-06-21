import { expect, test } from 'bun:test'
import { emailValidator } from '../../src'

test('emailValidator', () => {
  expect(emailValidator('lisi@qq.com')).toBeTrue()
  expect(emailValidator('wangwu@163.com')).toBeTrue()
  expect(emailValidator('xiaoli@gmail.com')).toBeTrue()
  expect(emailValidator('lisi@qq')).toBeFalse()
})
