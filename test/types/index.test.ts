import type { Equal, Expect } from '@type-challenges/utils'
import type { MergeType } from '../../src'

type cases = [
  Expect<
    Equal<
      MergeType<
        {
          a: number
        },
        {
          a: string
          b: number
        }
      >,
      { a: number | string; b: number }
    >
  >,
  Expect<
    Equal<
      MergeType<
        {
          a: number
          b: { c: number }
        },
        {
          a: string
          b: number
        }
      >,
      { a: number | string; b: number | { c: number } }
    >
  >,
  Expect<
    Equal<
      MergeType<
        {
          a: number
          b: { c: number }
        },
        {
          a: string
          b: { d: number }
        }
      >,
      { a: number | string; b: { c: number; d: number } }
    >
  >,
]
