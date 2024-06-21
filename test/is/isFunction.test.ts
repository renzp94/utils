import { expect, test } from 'bun:test'
import { isFunction } from '../../src'

test('isFunction', () => {
  expect(isFunction(1)).toBeFalse()
  expect(isFunction(() => {})).toBeTrue()
  const a: ((v: string) => string) | undefined = (v: string) => {
    return v
  }
  expect(isFunction(a)).toBeTrue()
})
