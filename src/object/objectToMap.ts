import { isObject } from '../is'

/**
 * 对象转Map
 * @param v 目标对象
 * @returns 返回转换后的Map
 *
 * @example
 * objectToMap({ a: 1, b: '2', c: false }); // Map(3) {'a' => 1, 'b' => '2', 'c' => false}
 */
export const objectToMap = <T extends Record<string | number | symbol, any>>(
  v: T,
): Map<keyof T, T[keyof T]> =>
  isObject(v)
    ? Object.keys(v).reduce((prev, key) => {
        prev.set(key, v[key])
        return prev
      }, new Map<keyof T, T[keyof T]>())
    : new Map()
