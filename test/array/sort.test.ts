import { expect, test } from 'bun:test'
import { sort } from '../../src'

test('基础数据数组排序', () => {
  expect(sort([1, 7, 4, 9, 3])).toEqual([1, 3, 4, 7, 9])
  expect(sort([1, 7, 4, 9, 3], { desc: true })).toEqual([9, 7, 4, 3, 1])
  expect(sort([1, false, 4, 0, 9, 3])).toEqual([false, 0, 1, 3, 4, 9])
  expect(sort(['a', 't', 'd', 'c', 'y', 'w'])).toEqual([
    'a',
    'c',
    'd',
    't',
    'w',
    'y',
  ])

  expect(sort(['a', 't', 'A', 'c', 'y', 'w'])).toEqual([
    'a',
    'A',
    'c',
    't',
    'w',
    'y',
  ])
})

test('对象数组排序', () => {
  expect(
    sort(
      [
        {
          name: 'a',
          age: 12,
        },
        {
          name: 'b',
          age: 10,
        },
        {
          name: 'c',
          age: 18,
        },
        {
          name: 'd',
          age: 16,
        },
      ],
      { filter: 'age' },
    ),
  ).toEqual([
    {
      name: 'b',
      age: 10,
    },
    {
      name: 'a',
      age: 12,
    },
    {
      name: 'd',
      age: 16,
    },
    {
      name: 'c',
      age: 18,
    },
  ])
})

test('自定义函数排序', () => {
  expect(
    sort(
      [
        {
          name: 'a',
          age: 12,
        },
        {
          name: 'b',
          age: 10,
        },
        {
          name: 'c',
          age: 18,
          noSort: true,
        },
        {
          name: 'd',
          age: 19,
        },
        {
          name: 'e',
          age: 16,
        },
      ],
      {
        filter: (a, b) => {
          if (b.noSort) {
            return 0
          }

          return a.age - b.age
        },
      },
    ),
  ).toEqual([
    {
      name: 'b',
      age: 10,
    },
    {
      name: 'a',
      age: 12,
    },
    {
      name: 'c',
      age: 18,
      noSort: true,
    },
    {
      name: 'e',
      age: 16,
    },
    {
      name: 'd',
      age: 19,
    },
  ])
})

test('基础数据数组排序', () => {
  expect(sort({ length: 1 } as any)).toEqual({ length: 1 } as any)
})
