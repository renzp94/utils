import { _toString } from '../_private'

/**
 * 是否为Map类型
 * @param v 要判断的变量
 * @returns 如果是Map则返回true，否则返回false
 *
 * @example
 * isMap(new Map()); // true
 * isMap({ size: 0 }); // false
 */
export const isMap = <K, V>(v: unknown): v is Map<K, V> =>
  _toString(v) === '[object Map]'
