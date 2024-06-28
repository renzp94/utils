import { expect, test } from 'bun:test'
import { isString, treeShaking } from '../../src'

test('Array根据下标树摇', () => {
  expect(treeShaking([1, '2', 3, 4, 5], { indexes: [0, 2] })).toEqual([
    ['2', 4, 5],
    [1, 3],
  ])
})

test('Array根据范围树摇', () => {
  expect(treeShaking([1, '2', 3, 4, 5], { start: 2, end: 4 })).toEqual([
    [1, '2'],
    [3, 4, 5],
  ])
})

test('Array根据开始范围树摇', () => {
  expect(treeShaking([1, '2', 3, 4, 5], { start: 3 })).toEqual([
    [1, '2', 3],
    [4, 5],
  ])
})

test('Array根据filter树摇', () => {
  expect(treeShaking([1, '2', 3, 4, 5], { filter: isString })).toEqual([
    [1, 3, 4, 5],
    ['2'],
  ])
})

test('Set根据下标树摇', () => {
  expect(treeShaking(new Set([1, '2', 3, 4, 5]), { indexes: [0, 2] })).toEqual([
    new Set(['2', 4, 5]),
    new Set([1, 3]),
  ])
})

test('Array根据范围树摇', () => {
  expect(treeShaking(new Set([1, '2', 3, 4, 5]), { start: 2, end: 4 })).toEqual(
    [new Set([1, '2']), new Set([3, 4, 5])],
  )
})

test('Array根据开始范围树摇', () => {
  expect(treeShaking(new Set([1, '2', 3, 4, 5]), { start: 3 })).toEqual([
    new Set([1, '2', 3]),
    new Set([4, 5]),
  ])
})

test('Array根据filter树摇', () => {
  expect(treeShaking(new Set([1, '2', 3, 4, 5]), { filter: isString })).toEqual(
    [new Set([1, 3, 4, 5]), new Set(['2'])],
  )
})

test('对象根据key树摇', () => {
  expect(
    treeShaking(
      {
        a: 1,
        b: 2,
        c: 3,
      },
      { keys: ['a'] },
    ),
  ).toEqual([{ b: 2, c: 3 }, { a: 1 }])
})

test('对象根据filter树摇', () => {
  expect(
    treeShaking(
      {
        a: 1,
        b: '2',
        c: 3,
      },
      { filter: isString },
    ),
  ).toEqual([{ a: 1, c: 3 }, { b: '2' }])
})

test('Map根据key树摇', () => {
  expect(
    treeShaking(
      new Map<'a' | 'b' | 'c', number>([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]),
      { keys: ['a'] },
    ),
  ).toEqual([
    new Map([
      ['b', 2],
      ['c', 3],
    ]),
    new Map([['a', 1]]),
  ])
})

test('对象根据filter树摇', () => {
  expect(
    treeShaking(
      new Map<string, string | number>([
        ['a', 1],
        ['b', '2'],
        ['c', 3],
      ]),
      { filter: isString },
    ),
  ).toEqual([
    new Map([
      ['a', 1],
      ['c', 3],
    ]),
    new Map([['b', '2']]),
  ])
})

test('传入的不是对象和数组', () => {
  expect(treeShaking(1 as any, { filter: isString })).toEqual([
    [1] as any,
    [] as any,
  ])
})
