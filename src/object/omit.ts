import type { ExpandRecursively } from '../types'
import { _po } from './_private'

/**
 * 删除对象指定属性
 *
 * 此方法不会改变源对象
 * @param target 源对象
 * @param filter 属性数组或自定义函数
 * @returns 如果源对象是对象则返回删除属性后的对象，否则原样返回
 *
 * @example
 * const a = { a: 1, b: 2, c: '3' };
 * const c = omit(a, "a"); // c = { b: 2, c: '3' }  a = { a: 1, b: 2, c: '3' }
 * omit(a, isNumber); // { c: '3' }
 */
export const omit = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  filter: Array<K> | ((v: T[keyof T]) => boolean),
): ExpandRecursively<Omit<T, K>> => {
  return _po(target, filter, 'omit') as unknown as ExpandRecursively<Omit<T, K>>
}
