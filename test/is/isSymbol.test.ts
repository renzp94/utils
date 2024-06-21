import { expect, test } from 'bun:test'
import { isSymbol } from '../../src'

test('isSymbol', () => {
  expect(isSymbol(Symbol(0))).toBeTrue()
  expect(isSymbol(0)).toBeFalse()
})
