import { expect, test } from 'bun:test'
import { compact } from '../../src'

test('排除假值', () => {
  expect(
    compact([0, 1, 2, undefined, null, false, Number.NaN, '', []]),
  ).toEqual([1, 2, []])
})

test('传入值不是数组', () => {
  expect(compact({ a: 0, b: 2, c: false } as any)).toEqual({
    a: 0,
    b: 2,
    c: false,
  })
})
