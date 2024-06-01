import { expect, test } from 'bun:test'
import { numberValidator } from '../../src'

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
