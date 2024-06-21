import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

/**
 * 是否有值(即：值不是undefined和null)
 * @param v 要判断的变量
 * @returns 如果有值则返回true，否则返回false
 *
 * @example
 * const a = 1;
 * isDef(a); // true
 * let b;
 * isDef(b); // false
 */
export const isDef = <T = any>(v: T): v is NonNullable<T> =>
  !isUndefined(v) && !isNull(v)
