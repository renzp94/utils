import { expect, test } from 'bun:test'
import { isArrayBuffer } from '../../src'

test('isArrayBuffer', () => {
  expect(isArrayBuffer(new ArrayBuffer(0))).toBeTrue()
  expect(isArrayBuffer([1])).toBeFalse()
})
