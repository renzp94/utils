import { _toString } from '../_base'

/**
 * 是否为WeakSet类型
 * @param v 要判断的变量
 * @returns 如果是WeakSet则返回true，否则返回false
 *
 * @example
 * isWeakSet(new WeakSet()); // true
 * isWeakSet({ size: 0 }); // false
 * isWeakSet(new Map()); // false
 * isWeakSet(new Set()); // false
 * isWeakSet({}); // false
 */
export const isWeakSet = <T extends WeakKey>(v: unknown): v is WeakSet<T> =>
  _toString(v) === '[object WeakSet]'
