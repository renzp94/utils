import { expect, test } from 'bun:test'
import { isNull } from '../../src'

test('isNull', () => {
  expect(isNull(null)).toBe(true)
  expect(isNull(0)).toBe(false)
})
