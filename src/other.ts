import { isArray, isDate, isMap, isObject, isRefData, isSet } from './is'

/**
 * 深拷贝
 *
 * 注意：由于WeakMap和WeakSet的键是弱引用，所以不能被深拷贝。
 *
 * @param v 要复制的值
 * @returns 返回复制后的新变量
 *
 * @example
 * const list: any = [{ a: 1 }, { a: 2 }]
 * const newList = copy(list).map((item: any) => {
 *  item.b = item.a * 2
 *  return item
 * })
 *
 * console.log(list); // [{ a: 1, b: 2 }, { a: 2, b: 4 }]
 * console.log(newList); // [{ a: 1 }, { a: 2 }]
 */
export const deepClone = <T = any>(v: T): T => {
  if (isRefData(v)) {
    if (isObject(v)) {
      return Object.keys(v).reduce((prev, key) => {
        return { ...prev, [key]: deepClone(v[key]) }
      }, {} as T)
    }

    if (isArray(v)) {
      return v.map((item) => deepClone(item)) as T
    }

    if (isDate(v)) {
      return new Date(v.getTime()) as T
    }

    if (isMap(v)) {
      return new Map(v) as T
    }

    if (isSet(v)) {
      return new Set(v) as T
    }
  }

  return v
}
