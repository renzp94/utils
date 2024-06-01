import { expect, test } from 'bun:test'
import { removeKey } from '../../src'

test('removeKey', () => {
  const a = { a: 1, b: 2 }
  const b = removeKey(a, 'a')
  expect(a).toEqual({ a: 1, b: 2 })
  expect(b).toEqual({ b: 2 })
})
