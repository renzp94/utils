import { expect, test } from 'bun:test'
import { isSet } from '../../src'

test('isSet', () => {
  expect(isSet(new Set())).toBe(true)
  expect(isSet({ size: 0 })).toBe(false)
})
