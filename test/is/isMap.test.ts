import { expect, test } from 'bun:test'
import { isMap } from '../../src'

test('isMap', () => {
  expect(isMap(new Map())).toBeTrue()
  expect(isMap({ size: 0 })).toBeFalse()
})
