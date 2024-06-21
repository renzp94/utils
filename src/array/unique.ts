import type { FilterOptions } from '../_base'
import { isArray, isEqual, isFunction, isString, isUnDef } from '../is'
import { deepClone } from '../other'

/**
 * 数组去重
 * @param list 要去重的数组
 * @param options 配置
 * @returns 返回去重后的数组
 *
 * @example
 * unique([1, 1, 2, 3, 4, 3]); // [1, 2, 3, 4]
 * unique(
 *  [
 *    { a: 1, b: 1 },
 *    { a: 2, b: 1 },
 *    { a: 3, b: 1 },
 *    { a: 1, b: 1 },
 *  ],
 *  { filter: 'a' },
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
 */
export const unique = <T>(
  list: Array<T>,
  options?: FilterOptions<T>,
): Array<T> => {
  // 如果不是数组，则返回空
  if (!isArray(list)) {
    return list
  }

  const { filter } = options ?? {}

  return deepClone(list).reduce(
    (prev, v) => {
      const exist =
        // 如果无过滤器则直接值比对
        (isUnDef(filter) && prev.some((item) => isEqual(item, v))) ||
        // 如果有过滤key，则认为数组是对象数组，通过key比较对象属性值是否相同
        (isString(filter) &&
          prev.some((item) => isEqual(item?.[filter], v?.[filter]))) ||
        // 如果有过滤key且为数组，则认为数组是对象数组，通过多个key比较对象属性值是否相同
        (isArray(filter) &&
          prev.some((item) =>
            filter.every((key) => isEqual(item?.[key], v?.[key])),
          )) ||
        // 如果是过滤函数，则通过过滤函数返回值判断是否相同
        (isFunction(filter) && prev?.some?.((item) => filter(v, item)))

      return exist ? prev : [...prev, v]
    },
    [] as Array<T>,
  )
}
