import { isBigint } from './isBigint'
import { isBoolean } from './isBoolean'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isSymbol } from './isSymbol'
import { isUndefined } from './isUndefined'

/**
 * 是否为基础数据类型
 *
 * 基础数据类型有：string, number, bigint, boolean, null, undefined，symbol
 *
 * @param v 要判断的变量
 * @returns 如果是基础数据类型则返回true，否则返回false
 *
 * @example
 * isPrimitive(1); // true
 * isPrimitive(1n); // true
 * isPrimitive('1'); // true
 * isPrimitive({}); // false
 * isPrimitive([]); // false
 * isPrimitive(null); // true
 * isPrimitive(undefined); // true
 * isPrimitive(Symbol()); // true
 * isPrimitive(new Map()); // false
 * isPrimitive(new Set()); // false
 * isPrimitive(new WeakMap()); // false
 */
export const isPrimitive = <T = unknown>(v: unknown): v is T =>
  isString(v) ||
  isNumber(v) ||
  isBoolean(v) ||
  isNull(v) ||
  isUndefined(v) ||
  isSymbol(v) ||
  isBigint(v)
