import {
  isArray,
  isDef,
  isFunction,
  isNumber,
  isSet,
  isString,
  isUndefined,
} from '../is'

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
 * 获取正在比较的数值
 * @param v 目标数据
 * @param filter 对象key或过滤函数
 * @returns 返回真正的比较数值
 */
const getValue = <T>(v: T, filter: keyof T | ((v: T) => T)): string | number =>
  (isDef(filter) ? (isFunction(filter) ? filter(v) : v?.[filter]) : v) as
    | string
    | number
/**
 * 比较数字
 * @param a 目标数字
 * @param b 被比较数字
 * @param isMax 是否为大于
 * @returns 返回比大小结果
 */
const compareNumber = (a: number, b: number, isMax: boolean): boolean =>
  isMax ? a > b : b < a

/**
 * 大小比较
 * @param a 目标数字
 * @param b 被比较数字
 * @param isMax 是否为大于
 * @returns 返回比大小结果
 */
const compare = (a: number, b: number, isMax: boolean): boolean =>
  isMax ? a > b : a < b
/**
 * 获取数组中的最大/小值通用方法
 * @param list 目标数组
 * @param filter 对象key或过滤函数
 * @returns 如果找到则返回最大/小值否则返回undefined
 */
export const _maxMin = <T extends Record<any, any> | string | number>(
  list: Array<T> | Set<T>,
  type: 'max' | 'min',
  filter?: keyof T | ((v: T) => T[keyof T]),
): T | undefined => {
  if (!isArray(list) && !isSet(list)) {
    return undefined
  }

  const _list = isSet(list) ? Array.from(list) : list

  const pass = _list.every((item) => {
    const v = getValue(item, filter)
    return isNumber(v) || isString(v)
  })

  if (!pass) {
    console.error(`${type}: 比较值仅支持数字或字符串`)
    return undefined
  }

  const isMax = type === 'max'

  return _list.reduce((prev: T | undefined, curr) => {
    if (isUndefined(prev)) {
      return curr
    }

    let compareV = getValue(prev, filter)
    let v = getValue(curr, filter)
    let compareRule = false
    let _v = Number(v)

    // 如果比较值是数字且被比较值可以转为数字，则按数字规则比较
    if (isNumber(compareV) && !Number.isNaN(_v)) {
      compareRule = compareNumber(compareV, _v, isMax)
    }
    _v = Number(compareV)
    // 如果被比较值是数字且比较值可以转为数字，则按数字规则比较
    if (isNumber(v) && !Number.isNaN(_v)) {
      compareRule = compareNumber(_v, v, isMax)
    }

    compareV = compareV.toString()
    v = v.toString()

    compareRule =
      compareV.length === v.length
        ? compare(compareV.localeCompare(v), 0, isMax)
        : compare(compareV.length, v.length, isMax)

    return compareRule ? prev : curr
  }, undefined)
}
