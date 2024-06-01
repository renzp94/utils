import { expect, test } from 'bun:test'
import { telValidator } from '../../src'

test('telValidator', () => {
  expect(telValidator('010-12345678')).toBe(true)
  expect(telValidator('021-54321000')).toBe(true)
  expect(telValidator('(010)88050109')).toBe(true)
  expect(telValidator('010-62770334')).toBe(true)
  expect(telValidator('010-770334')).toBe(false)
  expect(telValidator('12000000000')).toBe(false)
  expect(telValidator('12345678')).toBe(true)
  expect(telValidator('10-62770334')).toBe(false)
  expect(telValidator('01100-62770334')).toBe(false)
})
