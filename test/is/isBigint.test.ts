import { expect, test } from 'bun:test'
import { isBigint } from '../../src'

test('isBigint', () => {
  expect(isBigint(1n)).toBeTrue()
  expect(isBigint(1)).toBeFalse()
})
