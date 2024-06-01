import { expect, test } from 'bun:test'
import { numberSeparate } from '../../src'

test('整数分割', async () => {
  expect(numberSeparate(1234)).toBe('1,234')
  expect(numberSeparate(12345, { digit: 2 })).toBe('1,23,45')
})

test('小数分割', async () => {
  expect(numberSeparate(123456789.123456)).toBe('123,456,789.123456')
  expect(numberSeparate(123456789.123456, { isDealDecimal: true })).toBe(
    '123,456,789.123,456',
  )
})

test('字符串数字分割', async () => {
  expect(numberSeparate('1234' as any)).toBe('1234')
})
