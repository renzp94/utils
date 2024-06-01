import { expect, test } from 'bun:test'
import { isArray } from '../../src'

test('isArray', () => {
  expect(isArray([])).toBe(true)
  expect(isArray({ length: 1 })).toBe(false)
})
