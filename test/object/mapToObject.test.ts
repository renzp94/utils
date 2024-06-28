import { expect, test } from 'bun:test'
import { mapToObject } from '../../src'

test('对象转Map', () => {
  expect(
    mapToObject(
      new Map<'a' | 'b' | 'c', string | number | false>([
        ['a', 1],
        ['b', '2'],
        ['c', false],
      ]),
    ),
  ).toEqual({ a: 1, b: '2', c: false })

  expect(
    mapToObject(
      new Map<'a' | 'b' | 'c', string | number[] | false>([
        ['a', [1]],
        ['b', '2'],
        ['c', false],
      ]),
    ),
  ).toEqual({ a: [1], b: '2', c: false })
})

test('不是对象转Map', () => {
  expect(mapToObject(1 as any)).toEqual({})
})
