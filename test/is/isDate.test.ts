import { expect, test } from 'bun:test'
import { isDate } from '../../src'

test('isDate', () => {
  expect(isDate(new Date())).toBeTrue()
  expect(isDate('1970-01-01')).toBeFalse()
})
