import { isNumber } from './isNumber'

/**
 * 是否为小数
 * @param v 要判断的变量
 * @returns 如果是小数则返回true，否则返回false
 *
 * @example
 * isFloat(1); // false
 * isFloat(1.2); // true
 */
export const isFloat = <T = unknown>(v: T): v is T => isNumber(v) && v % 1 !== 0
