import { createArray } from './array'
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
export const radom = (min: number, max: number, precision = 12): number => {
  let v = Math.random() * (max - min + 1) + min
  v = v > max ? v - 1 : v

  return Number(v.toFixed(precision))
}

/**
 * 生成UUID
 * @param hasUppercase 是否含有大写字母
 * @returns 返回生成8-4-4-4-12格式的UUID
 *
 * @example
 * uuid(); // nlcvepvq-w764-vtn5-ut6t-13r7tyn0j8hb
 * uuid(true); // 4EbKOG6X-k6DJ-I5AJ-41FM-mP5At4u8D25G
 */
export const uuid = (hasUppercase = false): string => {
  // 随机字符组
  let chars = [
    ...createArray(26, (i) => String.fromCharCode(97 + i)),
    ...createArray(10, (i) => i),
  ]
  // 假如大写字母
  if (hasUppercase) {
    chars = chars.concat(createArray(26, (i) => String.fromCharCode(65 + i)))
  }
  // 随机数：时间戳 + 随机数
  const radomValue = `${Date.now()}${radom(
    10 ** 18,
    Number(createArray(19, 9).join('')),
  )}`
  // 根据随机数再随机生成随机字符
  const radomChars = Array.prototype.map.call(radomValue, (v) => {
    const index = radom(Number(v), chars.length - 2, 0)
    return chars[index]
  })

  return [
    radomChars.slice(0, 8),
    radomChars.slice(8, 12),
    radomChars.slice(12, 16),
    radomChars.slice(16, 20),
    radomChars.slice(20, 32),
  ]
    .join('-')
    .replaceAll(',', '')
}
