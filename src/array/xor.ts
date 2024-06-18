import type { FilterOptions } from '../_base'
import { isArray, isDef, isObject } from '../is'
import { deepClone } from '../other'
import { difference } from './difference'
import { last } from './last'
import { remove } from './remove'

/**
 * 数组取补集
 *
 * `入参说明`: 如果不需要配置则可以只传目标数组，如果需要则最后一个元素传配置项
 * @param ...args 目标数组参数或配置`[...Array, options?]`
 * @returns 返回一个只有补集部分的数组
 *
 * @example
 * xor([1, 1, 2, 3], [4, 3]); // [1, 1, 2, 4]
 * xor([1, false, 2], [false, 4, 1])); // [2, 4]
 * xor([1, 2, 3], [4, 3, '1']); // [1, 2, 4, '1']
 * xor(
 *   [
 *    { a: 0, b: 1 },
 *    { a: 0, b: 1 },
 *    { a: 0, b: 1 },
 *    { a: 1, b: 2 },
 *    { a: 2, b: 3 },
 *    { a: 3, b: 4 },
 *   ],
 *   [
 *     { a: 1, b: 1 },
 *     { a: 2, b: 1 },
 *     { a: 3, b: 1 },
 *     { a: 2, b: 5 },
 *   ],
 *   { filter: 'b' },
 * ); // [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }, { a: 2, b: 5 }]
 */
export const xor = <T>(
  ...args: [...Array<Array<T>>] | [...Array<Array<T>>, FilterOptions<T>]
): [...Array<T>] => {
  let _args = args as [...Array<Array<T>>]
  let options: FilterOptions<T> | undefined = last(args) as FilterOptions<T>

  if (isObject(options) && isDef(options?.filter)) {
    ;[_args] = remove(_args, -1)
  } else {
    options = undefined
  }

  if (!_args.every(isArray)) {
    console.warn('参数中要处理的目标数组有不是数组类型的数据')
    return []
  }

  const { filter } = options ?? {}

  const list = deepClone(_args).reduce((prev, currList, i) => {
    if (i === 0) {
      return currList
    }

    return [
      ...difference(prev, currList, { filter }),
      ...difference(currList, prev, { filter }),
    ]
  }, []) as [...Array<T>]

  return list
}
