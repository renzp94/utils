import { _toString } from '../_base'

/**
 * 是否为Object类型
 * @param v 要判断的变量
 * @returns 如果是Object则返回true，否则返回false
 *
 * @example
 * isObject({}); // true
 * isObject(1); // false
 */
export const isObject = <T extends Record<any, any>>(v: unknown): v is T =>
  _toString(v) === '[object Object]'
