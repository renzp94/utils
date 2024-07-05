import type { _ExcludeFalsy } from '../_private'
import { isArray, isTruth } from '../is'

/**
 * 去除数组中假值
 *
 * `假值`：
 *  - false
 *  - null
 *  - undefined
 *  - 0
 *  - ""
 *  - NaN
 * @param list 目标数组
 * @returns 如果是数组则返回去除假值后的数组，否则原样返回
 *
 * @example
 * compact([0, 1, 2, undefined, null, false, Number.NaN, '', []]); // [1, 2, []]
 * compact({ a: 0, b: 2, c: false }); // { a: 0, b: 2, c: false }
 */
export const compact = <T>(list: Array<T>): Array<_ExcludeFalsy<T>> => {
  if (isArray(list)) {
    return list.filter(isTruth)
  }

  return list
}
