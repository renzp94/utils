import { expect, test } from 'bun:test'
import { isSet } from '../../src'

test('isSet', () => {
  expect(isSet(new Set())).toBeTrue()
  expect(isSet({ size: 0 })).toBeFalse()
})
