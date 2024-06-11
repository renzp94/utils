import {
  isArray,
  isDef,
  isFunction,
  isNumber,
  isObject,
  isString,
  isSymbol,
} from '../is'

/**
 * 数组转对象
 * @param list 目标数组
 * @param key 转换后的对象属性(可直接指定目标数组中对象的key，也可自定义函数)
 * @param value 转换后的对象属性值(可直接指定目标数组中对象的key，也可自定义函数)
 * @returns 如果转换成功则返回转换后的对象，否则抛除异常
 *
 * @example
 *  const list = createArray(3, (i) => ({
 *   key: `key_${i}`,
 *   name: `name_${i}`,
 *   value: `value_${i}`,
 * }));
 * objectify(list, 'key');
 * //   key_0: {
 * //     key: 'key_0',
 * //     name: 'name_0',
 * //     value: 'value_0',
 * //   },
 * //   key_1: {
 * //     key: 'key_1',
 * //     name: 'name_1',
 * //     value: 'value_1',
 * //   },
 * //   key_2: {
 * //     key: 'key_2',
 * //     name: 'name_2',
 * //     value: 'value_2',
 * //   },
 * // }
 */
export const objectify = <
  T extends Record<string, any>,
  K extends keyof T,
  V = T,
>(
  list: Array<T>,
  key: K | ((v: T) => PropertyKey),
  value?: K | ((v: T) => V),
): {
  [P in T[K]]: V
} => {
  if (!isArray(list)) {
    throw new Error('参数list需要是一个数组')
  }

  if (!list.every(isObject)) {
    throw new Error('参数list数组中的每个元素应该是对象')
  }

  return list.reduce(
    (prev, curr: T) => {
      const _k: PropertyKey = isFunction(key)
        ? key(curr)
        : (curr[key] as PropertyKey)

      if (!isString(_k) && !isNumber(_k) && !isSymbol(_k)) {
        throw new Error('参数k类型需要是string/number/symbol类型')
      }

      const _v = isDef(value)
        ? isFunction(value)
          ? value(curr)
          : curr[value as keyof T]
        : curr

      return { ...prev, [_k as string]: _v }
    },
    {} as {
      [P in T[K]]: V
    },
  )
}
