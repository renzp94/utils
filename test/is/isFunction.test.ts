import { expect, test } from 'bun:test'
import { isFunction } from '../../src'

test('isFunction', () => {
  expect(isFunction(1)).toBe(false)
  expect(isFunction(() => {})).toBe(true)
  const a: ((v: string) => string) | undefined = (v: string) => {
    return v
  }
  expect(isFunction(a)).toBe(true)
})
