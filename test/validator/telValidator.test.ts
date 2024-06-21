import { expect, test } from 'bun:test'
import { telValidator } from '../../src'

test('telValidator', () => {
  expect(telValidator('010-12345678')).toBeTrue()
  expect(telValidator('021-54321000')).toBeTrue()
  expect(telValidator('(010)88050109')).toBeTrue()
  expect(telValidator('010-62770334')).toBeTrue()
  expect(telValidator('010-770334')).toBeFalse()
  expect(telValidator('12000000000')).toBeFalse()
  expect(telValidator('12345678')).toBeTrue()
  expect(telValidator('10-62770334')).toBeFalse()
  expect(telValidator('01100-62770334')).toBeFalse()
})
