import { expect, test } from 'bun:test'
import { isSymbol } from '../../src'

test('isSymbol', () => {
  expect(isSymbol(Symbol(0))).toBe(true)
  expect(isSymbol(0)).toBe(false)
})
