import { expect, test } from 'bun:test'
import { isRegExp } from '../../src'

test('isRegExp', () => {
  expect(isRegExp(/\d/)).toBeTrue()
  expect(isRegExp('/d/')).toBeFalse()
})
