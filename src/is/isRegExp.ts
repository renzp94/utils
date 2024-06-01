import { _toString } from '../_base'

/**
 * 是否为RegExp类型
 * @param v 要判断的变量
 * @returns 如果是RegExp则返回true，否则返回false
 *
 * @example
 * isRegExp(/\d/); // true
 * isRegExp('/\d/'); // false
 */
export const isRegExp = (v: unknown): v is RegExp =>
  _toString(v) === '[object RegExp]'
