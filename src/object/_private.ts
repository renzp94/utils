import { isFunction, isObject } from '../is'

/**
 * pick和omit的通用方法
 * @param target 源对象
 * @param filter 属性数组或自定义函数
 * @param type 操作类型：pick、omit
 * @returns 返回处理后的数据
 */
export const _po = <T extends Record<PropertyKey, any>, K extends keyof T>(
  target: T,
  filter: Array<K> | ((v: T[keyof T]) => boolean),
  type: 'pick' | 'omit',
): T => {
  if (!isObject(target)) {
    return target
  }

  return Object.keys(target)
    .filter((key) => {
      const has = isFunction(filter)
        ? filter(target[key])
        : filter.includes(key as K)

      return type === 'pick' ? has : !has
    })
    .reduce(
      (prev, key) => (target?.[key] ? { ...prev, [key]: target[key] } : prev),
      {} as T,
    )
}
