import { expect, test } from 'bun:test'
import { isString } from '../../src'

test('isString', () => {
  expect(isString('0')).toBe(true)
  expect(isString(0)).toBe(false)
})
