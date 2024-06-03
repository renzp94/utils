import { isDef, isFunction, isObject, isUnDef } from '../is'
import type { MergeType } from '../types'

export interface MergeOptions {
  deep?: boolean
  value?: (targetValue: any, sourceValue: any) => any
}

/**
 * 合并对象
 *
 * @param target 目标对象
 * @param source 合并对象
 * @param options 合并配置
 * @returns 如果target和source都是对象，则返回合并后的对象，否则返回target。
 *
 * @example
 * merge({ a: 1 }, { b: 1 }); // { a: 1, b: 1 }
 * merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } }); // { a: 1, b: { c: 2, d: 1 } }
 * merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } }, { deep: false }); // { a: 1, b: { c: 2 } }
 * merge(
 *  { a: [1], b: [2] },
 *  { a: [3], b: [4] },
 *  {
 *    value: (targetValue, sourceValue) => [...targetValue, ...sourceValue],
 *  },
 * ); // { a: [1, 3], b: [2, 4] }
 */
export const merge = <T, S>(
  target: T,
  source: S,
  options?: MergeOptions,
): T | MergeType<T, S> => {
  const { deep = true, value } = options ?? {}

  if (
    isObject<Record<string, unknown>>(target) &&
    isObject<Record<string, unknown>>(source)
  ) {
    const keys = [...Object.keys(target), ...Object.keys(source)]
    return keys.reduce(
      (prev, key) => {
        const targetValue = target[key]
        const sourceValue = source[key]
        let _v = sourceValue
        if (isFunction(value)) {
          _v = value(targetValue, sourceValue)
        } else {
          if (isUnDef(targetValue) && isDef(sourceValue)) {
            _v = sourceValue
          }

          if (isDef(targetValue) && isUnDef(sourceValue)) {
            _v = targetValue
          }

          if (deep && isObject(targetValue) && isObject(sourceValue)) {
            _v = merge(targetValue, sourceValue, options)
          }
        }

        return { ...prev, [key]: _v }
      },
      {} as Record<string, any>,
    ) as MergeType<T, S>
  }

  return target
}
