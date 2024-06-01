import { isObject } from '../is'

/**
 * 删除对象指定属性
 *
 * 此方法不会改变源对象
 * @param obj 源对象
 * @param key 属性
 * @returns 如果源对象是对象则返回删除属性后的对象，否则返回undefined
 *
 * @example
 * const a = { a: 1, b: 2 };
 * const c = removeKey(a, "a"); // c = { b: 2 }  a = { a: 1, b: 2 }
 */
export const removeKey = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
): Omit<T, K> | undefined => {
  if (!isObject(obj)) {
    return
  }

  const target = { ...obj } as T
  delete target[key]

  return target as Omit<T, K>
}
