import { expect, test } from 'bun:test'
import { idCardValidator } from '../../src'

test('idCardValidator', () => {
  expect(idCardValidator('34052419800101001X')).toBe(true)
  expect(idCardValidator('620102195603025028')).toBe(true)
  expect(idCardValidator('620102195603025026')).toBe(false)
  expect(idCardValidator('abc123456789012343')).toBe(false)
  expect(idCardValidator('620102195603465028')).toBe(false)
})
