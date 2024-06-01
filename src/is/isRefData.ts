import { isArray } from './isArray'
import { isDate } from './isDate'
import { isMap } from './isMap'
import { isObject } from './isObject'
import { isSet } from './isSet'
import { isWeakMap } from './isWeakMap'
import { isWeakSet } from './isWeakSet'

/**
 * 是否为引用类型数据
 *
 * 引用类型数据有：Object, Array, Date, Map, Set, WeakMap, WeakSet
 *
 * @param v 要判断的变量
 * @returns 如果是引用类型数据则返回true，否则返回false
 *
 * @example
 * isRefData({}); // true
 * isRefData([]); // true
 * isRefData(''); // false
 * isRefData(1); // false
 * isRefData(true); // false
 * isRefData(new Date()); // true
 * isRefData(new Map()); // true
 * isRefData(new Set()); // true
 * isRefData(new WeakMap()); // true
 * isRefData(new WeakSet()); // true
 */
export const isRefData = <T = unknown>(v: T): v is T =>
  isObject(v) ||
  isArray(v) ||
  isDate(v) ||
  isMap(v) ||
  isSet(v) ||
  isWeakMap(v) ||
  isWeakSet(v)
