import { expect, test } from 'bun:test'
import { isBigint } from '../../src'

test('isBigint', () => {
  expect(isBigint(1n)).toBe(true)
  expect(isBigint(1)).toBe(false)
})
