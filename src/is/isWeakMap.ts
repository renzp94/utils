import { _toString } from '../_base'

/**
 * 是否为WeakMap类型
 * @param v 要判断的变量
 * @returns 如果是WeakMap则返回true，否则返回false
 *
 * @example
 * isWeakMap(new WeakMap()); // true
 * isWeakMap({ size: 0 }); // false
 * isWeakMap(new Map()); // false
 * isWeakMap(new Set()); // false
 * isWeakMap({}); // false
 * isWeakMap([]); // false
 * isWeakMap(null); // false
 */
export const isWeakMap = <K extends WeakKey, V = any>(
  v: unknown,
): v is WeakMap<K, V> => _toString(v) === '[object WeakMap]'
