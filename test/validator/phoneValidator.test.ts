import { expect, test } from 'bun:test'
import { phoneValidator } from '../../src'

test('phoneValidator', () => {
  expect(phoneValidator('13311111111')).toBeTrue()
  expect(phoneValidator('1331111111')).toBeFalse()
  expect(phoneValidator('14000000000')).toBeTrue()
  expect(phoneValidator('12000000000')).toBeFalse()
})
