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

/**
 * 生成指定范围的随机数
 * @param min 最小范围
 * @param max 最大范围
 * @param precision 精度(最大为12)
 * @returns 返回生成的随机数
 *
 * @example
 * radom(100, 10000); // 9059.655590156493
 * radom(100, 10000, 0); // 9059
 */
export const radom = (min: number, max: number, precision = 12) => {
  return Number((Math.random() * (max - min + 1) + min).toFixed(precision))
}
