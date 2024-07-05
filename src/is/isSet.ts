import { _toString } from '../_private'

/**
 * 是否为Set类型
 * @param v 要判断的变量
 * @returns 如果是Set则返回true，否则返回false
 *
 * @example
 * isSet(new Set()); // true
 * isSet({ size: 0 }); // false
 */
export const isSet = <T = any>(v: unknown): v is Set<T> =>
  _toString(v) === '[object Set]'
