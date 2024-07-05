import type { ExpandRecursively } from '../types'
import { _po } from './_private'

/**
 * 获取对象指定属性
 *
 * 此方法不会改变源对象
 * @param target 源对象
 * @param filter 属性数组或自定义函数
 * @returns 如果源对象是对象则返回包含指定属性的对象，否则原样返回
 *
 * @example
 * const a = { a: 1, b: 2, c: '3' };
 * const c = pick(a, ["a"]); // c = { a: 1 }  a = { a: 1, b: 2, c: '3' }
 * pick<typeof a, 'a' | 'b'>(a, isNumber); // { a: 1, b: 2 }
 */
export const pick = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  filter: Array<K> | ((v: T[keyof T]) => boolean),
): ExpandRecursively<Pick<T, K>> => {
  return _po(target, filter, 'pick') as unknown as ExpandRecursively<Pick<T, K>>
}
