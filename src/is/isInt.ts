import { isNumber } from './isNumber'

/**
 * 是否为整数
 * @param v 要判断的变量
 * @returns 如果是整数则返回true，否则返回false
 *
 * @example
 * isInt(1); // true
 * isInt(1.2); // false
 */
export const isInt = <T = unknown>(v: T): v is T => isNumber(v) && v % 1 === 0
