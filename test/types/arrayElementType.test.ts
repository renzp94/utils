import type { Equal, Expect } from '@type-challenges/utils'
import type { ArrayElementType } from '../../src'

type cases = [
  Expect<Equal<ArrayElementType<Array<number>>, number>>,
  Expect<Equal<ArrayElementType<[number, string]>, number | string>>,
  Expect<Equal<ArrayElementType<[200, 401, 500]>, 200 | 401 | 500>>,
]
