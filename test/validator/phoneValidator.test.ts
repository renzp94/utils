import { expect, test } from 'bun:test'
import { phoneValidator } from '../../src'

test('phoneValidator', () => {
  expect(phoneValidator('13311111111')).toBe(true)
  expect(phoneValidator('1331111111')).toBe(false)
  expect(phoneValidator('14000000000')).toBe(true)
  expect(phoneValidator('12000000000')).toBe(false)
})
