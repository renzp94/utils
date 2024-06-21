import type { FilterOptions } from '../_base'
import {
  isArray,
  isEqual,
  isFunction,
  isPrimitive,
  isString,
  isUnDef,
} from '../is'
import { deepClone } from '../other'

/**
 * 过滤数组
 * @param list 目标数组
 * @param values 比较数组
 * @param options 配置
 * @returns 返回过滤后的数组
 *
 * @example
 * difference([1, 2, 3], [2, 3]); // [1]
 * difference([1, 2, false, '1'], ['1']); // [1, 2, false]
 * difference(
 *  [{ a: 1, b: 1 },{ a: 2, b: 2 }],
 *  [{ a: 1 }],
 *  { filter: 'a' },
 * ); // [{ a: 2, b: 2 }]
 * difference(
 *  [{ a: 0, b: 0 },{ a: 1, b: 1 },{ a: 2, b: 2 }],
 *  [{ a: 1 }],
 *  { filter: (target, v) => target.a < v.a },
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 2 }]
 */
export const difference = <T>(
  list: Array<T>,
  values: Array<T>,
  options?: FilterOptions<T>,
): Array<T> => {
  // 如果目标数组不是数组，则返回空
  if (!isArray(list)) {
    return []
  }
  // 如果比较数组不是数组，则返回目标数组
  if (!isArray(values)) {
    return list
  }

  const { filter } = options ?? {}

  // 如果没有过滤key或过滤函数则直接对比
  let filterFn: any = (v: T) => !values.some((item) => isEqual(item, v))
  // 如果是过滤key则对比key
  if (isString(filter)) {
    filterFn = (item: T) => {
      return (
        isUnDef(item?.[filter]) ||
        !values.some((v) => isEqual(item?.[filter], v?.[filter]))
      )
    }
  }
  // 如果是过滤key数组则全对比key
  if (isArray(filter)) {
    filterFn = (item: T) => {
      const hasKey = filter.findIndex((key) => item?.[key]) > -1
      return (
        !hasKey ||
        !values.some((v) =>
          filter.every((key) => isEqual(item?.[key], v?.[key])),
        )
      )
    }
  }
  // 如果是过滤函数则调用函数
  if (isFunction(filter)) {
    filterFn = (target: T) => {
      return !values.some((v: T) => {
        // 调用前处理一下，避免过滤函数修改原数据
        const _target = isPrimitive(target) ? target : deepClone(target)
        const _v = isPrimitive(v) ? v : deepClone(v)
        return filter(_target, _v)
      })
    }
  }

  return list.filter(filterFn)
}
