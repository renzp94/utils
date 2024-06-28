import type { Equal, Expect } from '@type-challenges/utils'
import type { Mutex } from '../../src'

type cases = [
  Expect<
    Equal<
      Mutex<
        {
          index: number
        },
        {
          start?: number
          end?: number
        }
      >,
      | ({
          index: number
        } & {
          start?: never
          end?: never
        })
      | ({
          start?: number
          end?: number
        } & {
          index?: never
        })
    >
  >,
]
