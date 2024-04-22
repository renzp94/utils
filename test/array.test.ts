import { expect, test } from 'bun:test'
import { flatten } from '../src'

test('扁平化数组', () => {
  expect(flatten([[1], 2, [3]])).toEqual([1, 2, 3])
  expect(flatten([[1, 2], 3, [4, [5]]])).toEqual([1, 2, 3, 4, [5]])
})

test('深度扁平化数组', () => {
  expect(flatten([[1, 2], 3, [4, [5]]], { deep: true })).toEqual([
    1, 2, 3, 4, 5,
  ])
  expect(
    flatten([[1, [2, [3, [4, [5]]]]], 6, [7, [8, [9]]]], { deep: true }),
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(flatten([[1, 2], 3, [4, [5]]], { deep: true, depth: 1 })).toEqual([
    1,
    2,
    3,
    4,
    [5],
  ])
})

test('深度扁平化对象数组', () => {
  expect(
    flatten(
      [
        {
          label: '1-1',
          value: '1-1',
          children: [
            {
              label: '2-1',
              value: '2-1',
              children: [{ label: '3-1', value: '3-1' }],
            },
            { label: '2-2', value: '2-2' },
          ],
        },
        { label: '1-2', value: '1-2' },
      ],
      { deep: true, deepKey: 'children' },
    ),
  ).toEqual([
    {
      label: '1-1',
      value: '1-1',
    },
    {
      label: '2-1',
      value: '2-1',
    },
    { label: '3-1', value: '3-1' },
    { label: '2-2', value: '2-2' },
    { label: '1-2', value: '1-2' },
  ])
})
