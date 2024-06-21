import { expect, test } from 'bun:test'
import { isUnDef } from '../../src'

test('isUnDef', () => {
  expect(isUnDef(undefined)).toBeTrue()
  expect(isUnDef(null)).toBeTrue()
  expect(isUnDef(0)).toBeFalse()
})
