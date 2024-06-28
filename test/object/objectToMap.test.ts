import { expect, test } from 'bun:test'
import { objectToMap } from '../../src'

test('对象转Map', () => {
  expect(objectToMap({ a: 1, b: '2', c: false })).toEqual(
    new Map<'a' | 'b' | 'c', string | number | false>([
      ['a', 1],
      ['b', '2'],
      ['c', false],
    ]),
  )

  expect(objectToMap({ a: [1], b: '2', c: false })).toEqual(
    new Map<'a' | 'b' | 'c', string | number[] | false>([
      ['a', [1]],
      ['b', '2'],
      ['c', false],
    ]),
  )
})

test('不是对象转Map', () => {
  expect(objectToMap(1 as any)).toEqual(new Map())
})
