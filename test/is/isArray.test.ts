import { expect, test } from 'bun:test'
import { isArray } from '../../src'

test('isArray', () => {
  expect(isArray([])).toBeTrue()
  expect(isArray({ length: 1 })).toBeFalse()
})
