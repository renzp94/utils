import { unique } from '../array'
import {
  isArray,
  isDate,
  isDef,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
} from '../is'

const _getSymbolKey = (v: symbol) => v.toString().slice('Symbol('.length, -1)
const _hasObjectKey = (v: string) => /^(\[object )[A-Z]{1}\w*\]$/.test(v)

export type EqualFilter<T, U> =
  | keyof T
  | keyof U
  | Array<keyof T>
  | Array<keyof U>
  | ((target: any, v: any) => boolean)

/**
 * 是否相等
 *
 * 注意：此方法仅支持基本数据类型、日期、正则、对象、Map、数组、Set。使用`SameValueZero`比较两者的值。
 *
 * @param target 目标数据
 * @param value 比较数据
 * @param filter 匹配规则
 * @returns 如果相等则返回true，否则返回false
 *
 * @example
 * equal(0, 0); // true
 * equal({ a: 1 }, { a: 1 }); // true
 * equal([1, 2, 3, '4'], [1, 2, 3, 4]); // false
 */
export const equal = <T, U>(
  target: T | Array<T> | Map<string, T> | Set<T>,
  value: U | Array<U> | Map<string, U> | Set<U>,
  filter?: EqualFilter<T, U>,
): boolean => {
  // 如果是自定义函数则直接使用函数对比
  if (isFunction(filter) && !isArray(target) && !isArray(value)) {
    return filter(target, value)
  }
  // 两个都是NaN就相等
  if (Number.isNaN(target) && Number.isNaN(value)) {
    return true
  }
  // symbol引用了相同的symbol值或使用的key的valueOf不是[object *]就相等
  if (isSymbol(target) && isSymbol(value)) {
    const targetKey = _getSymbolKey(target)
    const valueKey = _getSymbolKey(value)

    return (
      (target as symbol) === value ||
      (!_hasObjectKey(targetKey) &&
        !_hasObjectKey(valueKey) &&
        targetKey === valueKey)
    )
  }
  if (isNumber(target) && isNumber(value)) {
    return (target as number) === value
  }

  // 日期比较
  if (isDate(target) && isDate(value)) {
    return target.getTime() === value.getTime()
  }
  // 正则比较
  if (isRegExp(target) && isRegExp(value)) {
    return target.toString() === value.toString()
  }
  // 对象和Map比较
  if (
    (isObject(target) && isObject(value)) ||
    (isMap(target) && isMap(value))
  ) {
    let keys = unique([...Object.keys(target), ...Object.keys(value)])
    if (isMap(target) && isMap(value)) {
      keys = unique([
        ...Array.from(target.keys()),
        ...Array.from(value.keys()),
      ]) as Array<string>
    }

    if (isDef(filter)) {
      keys = isString(filter) ? [filter] : (filter as string[])
    }

    return (
      keys.length === 0 ||
      keys.every((key) => {
        const tv = isMap(target) ? target.get(key) : (target as any)[key]
        const vv = isMap(value) ? value.get(key) : (value as any)[key]
        return equal(tv, vv, filter)
      })
    )
  }
  // 数组和Set判断
  if ((isArray(target) && isArray(value)) || (isSet(target) && isSet(value))) {
    let _target = target as Array<T>
    let _value = value as Array<U>
    if (isSet(target) && isSet(value)) {
      _target = Array.from(target)
      _value = Array.from(value)
    }
    // 数量不相等则不相等
    if (_target.length !== _value.length) {
      return false
    }
    // 都为空则相等
    if (_target.length === 0) {
      return true
    }
    // 如果是自定义函数由自定义函数返回为准
    if (isFunction(filter)) {
      return _target.every((tv, index) => filter(tv, _value[index]))
    }
    return _target.every((tv, index) => equal(tv, _value[index]))
  }

  return Object.is(target, value)
}
