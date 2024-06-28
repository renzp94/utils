import { isArray, isDef, isFunction, isMap, isObject, isSet } from '../is'
import { objectToMap } from '../object'
import type { ArrayElementType, Mutex } from '../types'

export type TreeShakingArrayOptions = {
  indexes: Array<number>
  start?: number
  end?: number
}

export type TreeShakingArrayMutexOptions = Mutex<
  Pick<TreeShakingArrayOptions, 'indexes'>,
  Omit<TreeShakingArrayOptions, 'indexes'>
>

export type TreeShakingOptions<T> = Mutex<
  T extends Array<any>
    ? TreeShakingArrayMutexOptions
    : T extends Set<any>
      ? TreeShakingArrayMutexOptions
      : T extends Map<infer K, any>
        ? {
            keys: Array<K>
          }
        : {
            keys: Array<keyof T>
          },
  { filter?: (v: any) => boolean }
>

export type TreeShakingReturn<T> = T extends Array<any>
  ? [Array<ArrayElementType<T>>, Array<ArrayElementType<T>>]
  : [Partial<T>, Partial<T>]

/**
 * 数据树摇。即：从数据中删除一部分数据。
 *
 * 此方法仅支持对象，数组，Set，Map
 * @param v 要树摇的数据
 * @param options 配置
 * @returns 返回一个数组: [删除后的数据，删除的数据]
 *
 * @example
 * treeShaking([1, '2', 3, 4, 5], { indexes: [0, 2] }); // [['2', 4, 5], [1, 3]]
 * treeShaking([1, '2', 3, 4, 5], { start: 2, end: 4 }); // [[1, '2'], [3, 4, 5]]
 * treeShaking({ a: 1, b: 2, c: 3 }, { keys: ['a'] }; // [{ b: 2, c: 3 }, { a: 1 }]
 */
export const treeShaking = <
  T extends Record<string, any> | Array<any> | Set<any> | Map<string, any>,
>(
  v: T,
  options: TreeShakingOptions<T>,
): TreeShakingReturn<T> => {
  const { indexes, start, end, keys, filter } = (options ??
    {}) as TreeShakingArrayOptions & { keys: string[] } & {
    filter?: (v: any) => boolean
  }

  if (isArray(v) || isSet(v)) {
    const shakeList = [] as Array<ArrayElementType<T>>
    let list = (isSet(v) ? Array.from(v) : v) as Array<ArrayElementType<T>>
    list = list.filter((item, i) => {
      const isShake = isFunction(filter)
        ? filter(item)
        : indexes?.includes(i) ||
          (isDef(start) &&
            i >= start &&
            (isDef(end) ? i <= end : isDef(start) && i <= list.length - 1))

      if (isShake) {
        shakeList.push(item)
        return false
      }

      return true
    })
    return (
      isSet(v) ? [new Set(list), new Set(shakeList)] : [list, shakeList]
    ) as TreeShakingReturn<T>
  }

  if (isObject(v) || isMap(v)) {
    let shakeList: Record<string, any> = {}
    let list = isMap(v)
      ? Array.from(v.keys() as unknown as ArrayLike<string>)
      : Object.keys(v)

    list = list.filter((key: string) => {
      const value = isMap(v) ? v.get(key) : v[key]
      const isShake = isFunction(filter) ? filter(value) : keys.includes(key)

      if (isShake) {
        shakeList = {
          ...shakeList,
          [key]: value,
        }

        return false
      }

      return true
    })
    let target: Record<string, any> = list.reduce(
      (prev, key) => ({
        ...prev,
        [key]: isMap(v) ? v.get(key) : v[key],
      }),
      {},
    )

    if (isMap(v)) {
      target = objectToMap(target)
      shakeList = objectToMap(shakeList)
    }

    return [target, shakeList] as TreeShakingReturn<T>
  }

  return [[v], []] as unknown as TreeShakingReturn<T>
}
