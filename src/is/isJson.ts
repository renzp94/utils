import { isDef } from './isDef'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * 是否为Json数据
 * @param v 要判断的变量
 * @returns 如果是json数据则返回true，否则返回false
 *
 * @example
 * isJson(null); // false
 * isJson(undefined); // false
 * isJson(''); // false
 * isJson('{ "a": 1 }'); // true
 */
export const isJson = <T = unknown>(v: T): v is T => {
  try {
    return isObject(isDef(v) && isString(v) ? JSON.parse(v) : v)
  } catch {
    return false
  }
}
