import { expect, test } from 'bun:test'
import { isMap } from '../../src'

test('isMap', () => {
  expect(isMap(new Map())).toBe(true)
  expect(isMap({ size: 0 })).toBe(false)
})
