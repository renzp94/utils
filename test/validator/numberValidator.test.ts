import { expect, test } from 'bun:test'
import { numberValidator } from '../../src'

test('numberValidator', () => {
  expect(numberValidator('1')).toBeTrue()
  expect(numberValidator('1.1')).toBeTrue()
  expect(numberValidator('1.1.1')).toBeFalse()
  expect(numberValidator('.1')).toBeFalse()
  expect(numberValidator('1.')).toBeFalse()
  expect(numberValidator('-1')).toBeTrue()
  expect(numberValidator('+1')).toBeTrue()
  expect(numberValidator('+1.1')).toBeTrue()
  expect(numberValidator('-1.1')).toBeTrue()
  expect(numberValidator('12e2')).toBeTrue()
  expect(numberValidator('12e+2')).toBeTrue()
  expect(numberValidator('12e-2')).toBeTrue()
  expect(numberValidator('12.100000.21')).toBeFalse()
  expect(numberValidator('0.1')).toBeTrue()
  expect(numberValidator('000000.1')).toBeTrue()
  expect(numberValidator('0.00000.1')).toBeFalse()
  expect(numberValidator('12a')).toBeFalse()
  expect(numberValidator('e')).toBeFalse()
})
