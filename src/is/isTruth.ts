import type { _ExcludeFalsy } from '../_private'
import { isFalsy } from './isFalsy'

/**
 *
 * 是否为真值
 * @param v 要判断的变量
 * @returns 如果是真值则返回true，否则返回false
 *
 * @example
 * isTruth(false); // false
 * isTruth(1); // true
 */
export const isTruth = <T = any>(v: T): v is _ExcludeFalsy<T> => !isFalsy(v)
