import { expect, test } from 'bun:test'
import {
  ZH_MATCH,
  emailValidator,
  idCardValidator,
  numberValidator,
  phoneValidator,
  telValidator,
  zhValidator,
} from '../src'

test('emailValidator', () => {
  expect(emailValidator('lisi@qq.com')).toBe(true)
  expect(emailValidator('wangwu@163.com')).toBe(true)
  expect(emailValidator('xiaoli@gmail.com')).toBe(true)
  expect(emailValidator('lisi@qq')).toBe(false)
})

test('idCardValidator', () => {
  expect(idCardValidator('34052419800101001X')).toBe(true)
  expect(idCardValidator('620102195603025028')).toBe(true)
  expect(idCardValidator('620102195603025026')).toBe(false)
  expect(idCardValidator('abc123456789012343')).toBe(false)
  expect(idCardValidator('620102195603465028')).toBe(false)
})

test('numberValidator', () => {
  expect(numberValidator('1')).toBe(true)
  expect(numberValidator('1.1')).toBe(true)
  expect(numberValidator('1.1.1')).toBe(false)
  expect(numberValidator('.1')).toBe(false)
  expect(numberValidator('1.')).toBe(false)
  expect(numberValidator('-1')).toBe(true)
  expect(numberValidator('+1')).toBe(true)
  expect(numberValidator('+1.1')).toBe(true)
  expect(numberValidator('-1.1')).toBe(true)
  expect(numberValidator('12e2')).toBe(true)
  expect(numberValidator('12e+2')).toBe(true)
  expect(numberValidator('12e-2')).toBe(true)
  expect(numberValidator('12.100000.21')).toBe(false)
  expect(numberValidator('0.1')).toBe(true)
  expect(numberValidator('000000.1')).toBe(true)
  expect(numberValidator('0.00000.1')).toBe(false)
  expect(numberValidator('12a')).toBe(false)
  expect(numberValidator('e')).toBe(false)
})

test('phoneValidator', () => {
  expect(phoneValidator('13311111111')).toBe(true)
  expect(phoneValidator('1331111111')).toBe(false)
  expect(phoneValidator('14000000000')).toBe(true)
  expect(phoneValidator('12000000000')).toBe(false)
})

test('telValidator', () => {
  expect(telValidator('010-12345678')).toBe(true)
  expect(telValidator('021-54321000')).toBe(true)
  expect(telValidator('(010)88050109')).toBe(true)
  expect(telValidator('010-62770334')).toBe(true)
  expect(telValidator('010-770334')).toBe(false)
  expect(telValidator('12000000000')).toBe(false)
  expect(telValidator('12345678')).toBe(true)
  expect(telValidator('10-62770334')).toBe(false)
  expect(telValidator('01100-62770334')).toBe(false)
})

test('zhValidator', () => {
  expect(zhValidator('这是一段中文文字，还有中文的标点符号。')).toBe(true)
  expect(zhValidator('这是一段中文文字', ZH_MATCH.W)).toBe(true)
  expect(
    zhValidator('这是一段中文文字，还有中文的标点符号。', ZH_MATCH.W),
  ).toBe(false)
  expect(zhValidator('这是一段含有英文符号的字符串.')).toBe(false)
  expect(zhValidator('《》（）', ZH_MATCH.S)).toBe(true)
  expect(zhValidator('这是一段中文文字，还有中文的标点符号', ZH_MATCH.S)).toBe(
    false,
  )
})
