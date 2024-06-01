import { expect, test } from 'bun:test'
import { isRegExp } from '../../src'

test('isRegExp', () => {
  expect(isRegExp(/\d/)).toBe(true)
  expect(isRegExp('/d/')).toBe(false)
})
