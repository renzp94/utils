import { _po } from '../_base'
import type { ExpandRecursively } from '../types'

/**
 * 删除对象指定属性
 *
 * 此方法不会改变源对象
 * @param target 源对象
 * @param keys 属性数组
 * @returns 如果源对象是对象则返回删除属性后的对象，否则原样返回
 *
 * @example
 * const a = { a: 1, b: 2 };
 * const c = omit(a, "a"); // c = { b: 2 }  a = { a: 1, b: 2 }
 */
export const omit = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  keys: Array<K>,
): ExpandRecursively<Omit<T, K>> => {
  return _po(target, keys, 'omit') as unknown as ExpandRecursively<Omit<T, K>>
}
