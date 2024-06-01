import { _toString } from '../_base'

/**
 * 是否为Date类型
 * @param v 要判断的变量
 * @returns 如果是Date则返回true，否则返回false
 *
 * @example
 * isDate(new Date()); // true
 * isDate('1970-01-01'); // false
 */
export const isDate = (v: unknown): v is Date =>
  _toString(v) === '[object Date]'
