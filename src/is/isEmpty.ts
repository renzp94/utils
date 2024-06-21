import { isArrayBuffer } from './isArrayBuffer'
import { isBigint } from './isBigint'
import { isBoolean } from './isBoolean'
import { isDate } from './isDate'
import { isFunction } from './isFunction'
import { isMap } from './isMap'
import { isNumber } from './isNumber'
import { isObject } from './isObject'
import { isSet } from './isSet'
import { isSymbol } from './isSymbol'
import { isUnDef } from './isUnDef'
import { isUndefined } from './isUndefined'
import { isWeakMap } from './isWeakMap'
import { isWeakSet } from './isWeakSet'

/**
 * 是否为空
 *
 * - null/undefined/symbol/function类型一定返回true。
 * - 如果是数字，则不为NaN就返回true。
 * - 如果是时间，时间戳则不为NaN就返回true。
 * - 不支持WeakMap和WeakSet类型。
 * - 对象有key则返回true。
 * - 其他的就直接判断length属性，如果未定义则返回true，否则比较是否大于0。
 *
 * @param target 目标数据
 * @returns 如果为空则返回true，否则返回false
 *
 * @example
 * isEmpty(null); // true
 * isEmpty(0); // false
 * isEmpty(Number.NaN); // true
 * isEmpty({}); // true
 * isEmpty([]); // true
 */
export const isEmpty = <T>(target: T): boolean => {
  if (
    isUnDef(target) ||
    isBoolean(target) ||
    isSymbol(target) ||
    isFunction(target)
  ) {
    return true
  }

  if (isNumber(target) || isBigint(target)) {
    return Number.isNaN(target)
  }

  if (isDate(target)) {
    return Number.isNaN(target.getTime())
  }

  if (isMap(target) || isSet(target)) {
    return !target.size
  }

  if (isWeakMap(target) || isWeakSet(target)) {
    throw new Error('isEmpty不支持WeakMap和WeakSet类型的数据')
  }

  if (isObject(target)) {
    return !Object.keys(target).length
  }

  if (isArrayBuffer(target)) {
    return !target.byteLength
  }

  return isUndefined((target as any).length) || (target as any).length < 1
}
