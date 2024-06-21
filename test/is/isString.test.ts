import { expect, test } from 'bun:test'
import { isString } from '../../src'

test('isString', () => {
  expect(isString('0')).toBeTrue()
  expect(isString(0)).toBeFalse()
})
