import { expect, test } from 'bun:test'
import { isJson } from '../../src'

test('isJson', () => {
  expect(isJson(null)).toBe(false)
  expect(isJson(undefined)).toBe(false)
  expect(isJson('')).toBe(false)
  expect(isJson('{ "a": 1 }')).toBe(true)
})
