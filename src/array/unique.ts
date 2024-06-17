import type { Filter } from '../_base'
import { isArray, isFunction, isString, isUnDef } from '../is'
import { deepClone } from '../other'

export type UniqueOptions<T> = {
  filter?: Filter<T>
  strict?: boolean
}
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
 *  'a',
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
 */
export const unique = <T>(
  list: Array<T>,
  options?: UniqueOptions<T>,
): Array<T> => {
  // 如果不是数组，则返回空
  if (!isArray(list)) {
    return list
  }

  const { filter, strict = true } = options ?? {}

  return deepClone(list).reduce(
    (prev, v) => {
      const exist =
        // 如果无过滤器则直接值比对
        (isUnDef(filter) &&
          // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
          (strict ? prev.includes(v) : prev.some((item) => item == v))) ||
        // 如果有过滤key，则认为数组是对象数组，通过key比较对象属性值是否相同
        (isString(filter) &&
          prev.some((item) =>
            strict
              ? item?.[filter] === v?.[filter]
              : // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
                item?.[filter] == v?.[filter],
          )) ||
        // 如果有过滤key且为数组，则认为数组是对象数组，通过多个key比较对象属性值是否相同
        (isArray(filter) &&
          prev.some((item) =>
            filter.every((key) =>
              // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
              strict ? item?.[key] === v?.[key] : item?.[key] == v?.[key],
            ),
          )) ||
        // 如果是过滤函数，则通过过滤函数返回值判断是否相同
        (isFunction(filter) && prev?.some?.((item) => filter(v, item)))

      return exist ? prev : [...prev, v]
    },
    [] as Array<T>,
  )
}
