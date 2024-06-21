import { expect, test } from 'bun:test'
import { idCardValidator } from '../../src'

test('idCardValidator', () => {
  expect(idCardValidator('34052419800101001X')).toBeTrue()
  expect(idCardValidator('620102195603025028')).toBeTrue()
  expect(idCardValidator('620102195603025026')).toBeFalse()
  expect(idCardValidator('abc123456789012343')).toBeFalse()
  expect(idCardValidator('620102195603465028')).toBeFalse()
})
