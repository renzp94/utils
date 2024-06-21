import { expect, test } from 'bun:test'
import { isNull } from '../../src'

test('isNull', () => {
  expect(isNull(null)).toBeTrue()
  expect(isNull(0)).toBeFalse()
})
