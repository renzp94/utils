import { _toString } from '../_private'

/**
 * 是否为Null
 * @param v 要判断的变量
 * @returns 如果是Null则返回true，否则返回false
 *
 * @example
 * const a = null;
 * isNull(a); // true
 * const b = 1;
 * isNull(b); // false
 */
export const isNull = (v: unknown): v is null =>
  _toString(v) === '[object Null]'
