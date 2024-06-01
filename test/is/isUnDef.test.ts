import { expect, test } from 'bun:test'
import { isUnDef } from '../../src'

test('isUnDef', () => {
  expect(isUnDef(undefined)).toBe(true)
  expect(isUnDef(null)).toBe(true)
  expect(isUnDef(0)).toBe(false)
})
