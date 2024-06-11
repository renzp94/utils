import { isArray, isObject } from './is'

/**
 * 调用变量的toString
 * @param v 变量
 * @returns 返回toString返回的数据
 */
export const _toString = (v: unknown): string =>
  Object.prototype.toString.call(v)

/**
 * 排除假值类型
 */
export type _ExcludeFalsy<T> = T extends false | null | undefined | 0 | ''
  ? never
  : T

/**
 * 获取数组元素
 * @param list 目标数组
 * @param index 数组下标
 * @param defaultValue 默认值
 * @returns 返回指定下标的元素，如果没有返回默认值
 */
export const _find = <T>(
  list: Array<T>,
  index: number,
  defaultValue?: T,
): T | undefined => {
  if (isArray(list)) {
    return list?.[index] ?? defaultValue
  }

  return defaultValue
}
/**
 * pick和omit的通用方法
 * @param target 源对象
 * @param keys 属性名数组
 * @param type 操作类型：pick、omit
 * @returns 返回处理后的数据
 */
export const _po = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  keys: Array<K>,
  type: 'pick' | 'omit',
): T => {
  if (!isObject(target)) {
    return target
  }
  return Object.keys(target)
    .filter((key) => {
      const has = keys.includes(key as any)
      return type === 'pick' ? has : !has
    })
    .reduce(
      (prev, key) => (target?.[key] ? { ...prev, [key]: target[key] } : prev),
      {} as T,
    )
}
