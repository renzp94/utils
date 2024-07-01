import { isArray } from './isArray'
import { isDef } from './isDef'
import { isObject } from './isObject'

/**
 * 是否为ArrayLike类型
 *
 * ArrayLike满足条件：为Object类型、有length且在有效范围(0~2^53-1)内
 *
 * @param v 要判断的变量
 * @returns 如果是ArrayLike类型则返回true，否则返回false
 *
 * @example
 * isArrayLike([]); // true
 * isArrayLike({ 1: 1, 2: 2 }); // false
 * isArrayLike({ 1: 1, 2: 2, length: 1 }); // true
 * isArrayLike(document.querySelectorAll('div')); // true
 */
export const isArrayLike = <T = unknown>(v: T): v is T => {
  if (isArray(v)) {
    return true
  }

  if (
    isObject(v) &&
    isDef(v?.length) &&
    v.length >= 0 &&
    v.length <= Number.MAX_SAFE_INTEGER
  ) {
    return true
  }

  return false
}
