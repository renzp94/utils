import type { FilterOptions } from '../_private'
import { isArray, isDef, isFunction, isNumber, isString } from '../is'
import { deepClone } from '../other'

export type SortFilter<T> = keyof T | ((target: T, v: T) => number)

export interface SortOptions<T> {
  filter?: SortFilter<T>
  desc?: boolean
}

/**
 * 数组排序(默认升序)
 *
 * @param list 要排序的数组
 * @param options 配置
 * @returns 返回排序后的数组
 *
 * @example
 * sort([1, 7, 4, 9, 3]); // [1, 3, 4, 7, 9]
 * sort([1, 7, 4, 9, 3], { desc: true }); // [9, 7, 4, 3, 1]
 */
export const sort = <T>(list: Array<T>, options?: SortOptions<T>): Array<T> => {
  if (!isArray(list)) {
    console.warn('参数list不是数组类型的数据')
    return list
  }

  const { filter, desc } = options ?? {}

  if (isFunction(filter)) {
    return deepClone(list).sort(filter)
  }

  let _list: Array<any> = deepClone(list)

  if (isString(filter)) {
    _list = list.map((item, i) => ({ i, value: item?.[filter] }))
  }

  const _sortFn = (a: T, b: T) => {
    const curr = isString(filter)
      ? (a as { value: number | string }).value
      : (a as number | string)
    const next = isString(filter)
      ? (b as { value: number | string }).value
      : (b as number | string)

    if (isString(next) && isString(curr)) {
      return desc ? next.localeCompare(curr) : curr.localeCompare(next)
    }

    return desc
      ? (next as number) - (curr as number)
      : (curr as number) - (next as number)
  }

  _list.sort(_sortFn)

  if (isString(filter)) {
    _list = _list.map((v: { i: number }) => list[v.i])
  }

  return _list
}
