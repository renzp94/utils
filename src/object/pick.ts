import { _po } from '../_base'
import type { ExpandRecursively } from '../types'

/**
 * 获取对象指定属性
 *
 * 此方法不会改变源对象
 * @param target 源对象
 * @param keys 属性名数组
 * @returns 如果源对象是对象则返回包含指定属性的对象，否则原样返回
 *
 * @example
 * const a = { a: 1, b: 2 };
 * const c = pick(a, ["a"]); // c = { a: 1 }  a = { a: 1, b: 2 }
 */
export const pick = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  keys: Array<K>,
): ExpandRecursively<Pick<T, K>> => {
  return _po(target, keys, 'pick') as unknown as ExpandRecursively<Pick<T, K>>
}
