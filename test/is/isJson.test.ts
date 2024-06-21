import { expect, test } from 'bun:test'
import { isJson } from '../../src'

test('isJson', () => {
  expect(isJson(null)).toBeFalse()
  expect(isJson(undefined)).toBeFalse()
  expect(isJson('')).toBeFalse()
  expect(isJson('{ "a": 1 }')).toBeTrue()
})
