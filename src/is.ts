import {
  type _ExcludeFalsy,
  type _ExcludeUndefinedNull,
  _toString,
} from './_base'

/**
 * 是否为Array类型
 * @param v 要判断的变量
 * @returns 如果是Array则返回true，否则返回false
 *
 * @example
 * isArray([]); // true
 * isArray({ length: 1 }); // false
 */
export const isArray = <T = Array<any>>(v: T): v is T => Array.isArray(v)

/**
 * 是否为bigint类型
 * @param v 要判断的变量
 * @returns 如果是bigint则返回true，否则返回false
 *
 * @example
 * isBigint(1n); // true
 * isBigint(1); // false
 */
export const isBigint = (v: unknown): v is bigint => typeof v === 'bigint'

/**
 * 是否为boolean类型
 * @param v 要判断的变量
 * @returns 如果是boolean则返回true，否则返回false
 *
 * @example
 * isBoolean(false); // true
 * isBoolean(1); // false
 */
export const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean'

/**
 * 是否为Date类型
 * @param v 要判断的变量
 * @returns 如果是Date则返回true，否则返回false
 *
 * @example
 * isDate(new Date()); // true
 * isDate('1970-01-01'); // false
 */
export const isDate = (v: unknown): v is Date =>
  _toString(v) === '[object Date]'

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
export const isDef = <T = any>(v: T): v is _ExcludeUndefinedNull<T> =>
  !isUndefined(v) && !isNull(v)

/**
 * 是否为假值(false或者可以隐式转换成false的值)
 *
 * `假值`：
 *  - false
 *  - null
 *  - undefined
 *  - 0
 *  - ""
 *  - NaN
 * @param v 要判断的变量
 * @returns 如果是假值则返回true，否则返回false
 *
 * @example
 * isFalsy(false); // true
 * isFalsy(1); // false
 */
export const isFalsy = (v: unknown): v is false | null | undefined | 0 | '' =>
  !v

/**
 * 是否为function类型
 * @param v 要判断的变量
 * @returns 如果是function则返回true，否则返回false
 *
 * @example
 * const a = () => {};
 * isFunction(a); // true
 * const b = 1;
 * isFunction(b); // false
 */
export const isFunction = <T extends Function>(v: unknown): v is T =>
  typeof v === 'function'

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

/**
 * 是否为Map类型
 * @param v 要判断的变量
 * @returns 如果是Map则返回true，否则返回false
 *
 * @example
 * isMap(new Map()); // true
 * isMap({ size: 0 }); // false
 */
export const isMap = <T = Map<any, any>>(v: T): v is T =>
  _toString(v) === '[object Map]'

/**
 * 是否为Null
 * @param v 要判断的变量
 * @returns 如果是Null则返回true，否则返回false
 *
 * @example
 * const a = null;
 * isNull(a); // true
 * const b = 1;
 * isNull(b); // false
 */
export const isNull = (v: unknown): v is null =>
  _toString(v) === '[object Null]'

/**
 * 是否为number类型
 * @param v 要判断的变量
 * @returns 如果是number则返回true，否则返回false
 *
 * @example
 * isNumber(1); // true
 * isNumber('1'); // false
 */
export const isNumber = (v: unknown): v is number => typeof v === 'number'

/**
 * 是否为Object类型
 * @param v 要判断的变量
 * @returns 如果是Object则返回true，否则返回false
 *
 * @example
 * isObject({}); // true
 * isObject(1); // false
 */
export const isObject = <T = object>(v: T): v is T =>
  _toString(v) === '[object Object]'

/**
 * 是否为基础数据类型
 *
 * 基础数据类型有：string, number, boolean, null, undefined，symbol
 *
 * @param v 要判断的变量
 * @returns 如果是基础数据类型则返回true，否则返回false
 *
 * @example
 * isPrimitive(1); // true
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
  isSymbol(v)

/**
 * 是否为RegExp类型
 * @param v 要判断的变量
 * @returns 如果是RegExp则返回true，否则返回false
 *
 * @example
 * isRegExp(/\d/); // true
 * isRegExp('/\d/'); // false
 */
export const isRegExp = (v: unknown): v is RegExp =>
  _toString(v) === '[object RegExp]'

/**
 * 是否为Set类型
 * @param v 要判断的变量
 * @returns 如果是Set则返回true，否则返回false
 *
 * @example
 * isSet(new Set()); // true
 * isSet({ size: 0 }); // false
 */
export const isSet = <T = Set<any>>(v: T): v is T =>
  _toString(v) === '[object Set]'

/**
 * 是否为string类型
 * @param v 要判断的变量
 * @returns 如果是string则返回true，否则返回false
 *
 * @example
 * isString('1'); // true
 * isString(1); // false
 */
export const isString = (v: unknown): v is string => typeof v === 'string'

/**
 * 是否为symbol类型
 * @param v 要判断的变量
 * @returns 如果是symbol则返回true，否则返回false
 *
 * @example
 * isSymbol(Symbol(0)); // true
 * isSymbol(0); // false
 */
export const isSymbol = (v: unknown): v is symbol => typeof v === 'symbol'

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

/**
 * 是否为undefined
 * @param v 要判断的变量
 * @returns 如果是undefined则返回true，否则返回false
 *
 * @example
 * const a = 1;
 * isUndefined(a); // false
 * let b;
 * isUndefined(b); // true
 */
export const isUndefined = (v: unknown): v is undefined =>
  typeof v === 'undefined'

/**
 * 是否为无值(即：值为undefined或null)
 * @param v 要判断的变量
 * @returns 如果无值则返回true，否则返回false
 *
 * @example
 * const a = 1;
 * isUnDef(a); // false
 * let b;
 * isUnDef(b); // true
 */
export const isUnDef = (v: unknown): v is undefined | null => !isDef(v)
