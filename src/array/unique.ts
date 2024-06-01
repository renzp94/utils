import { isArray, isFunction, isString, isUnDef } from '../is'
import { deepClone } from '../other'

export type UniqueFilter<T> =
  | keyof T
  | Array<keyof T>
  | ((target: T, v: T) => boolean)
/**
 * 数组去重
 * @param list 要去重的数组
 * @param filter 过滤器
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
 *  'a',
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
 */
export const unique = <T>(
  list: Array<T>,
  filter?: UniqueFilter<T>,
): Array<T> => {
  // 如果不是数组，则返回空
  if (!isArray(list)) {
    return list
  }

  return deepClone(list).reduce(
    (prev, v) => {
      let exist = false
      // 如果无过滤器则直接值比对
      if (isUnDef(filter)) {
        exist = prev.includes(v)
      }
      // 如果有过滤key，则认为数组是对象数组，通过key比较对象属性值是否相同
      if (isString(filter)) {
        exist = prev.some((item) => item?.[filter] === v?.[filter])
      }
      // 如果有过滤key且为数组，则认为数组是对象数组，通过多个key比较对象属性值是否相同
      if (isArray(filter)) {
        exist = prev.some((item) =>
          filter.every((key) => item?.[key] === v?.[key]),
        )
      }
      // 如果是过滤函数，则通过过滤函数返回值判断是否相同
      if (isFunction(filter)) {
        if (prev.length > 0) {
          exist = prev.some((item) => filter(v, item))
        }
      }

      return exist ? prev : [...prev, v]
    },
    [] as Array<T>,
  )
}
