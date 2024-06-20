import { isArray, isFunction, isNull, isObject } from './is'
import type { DebounceOptions } from './other'

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

export type _DebounceCommonFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
}

export const _debounceCommon = <T extends (...args: any) => any>(
  fn: T,
  time: number,
  callTiming: 'before' | 'after',
  customFn: (
    timer: Timer | null,
    isCancel: boolean,
    callback: (timer: Timer | null, enableWork: boolean) => void,
  ) => Timer | null,
): _DebounceCommonFn<T> => {
  if (!isFunction(fn)) {
    throw new Error('参数fn应该为函数')
  }

  const isBefore = callTiming === 'before'
  let enableWork = isBefore || time < 0
  let timer: Timer | null = null
  let _args: Parameters<T>
  let isCancel = false
  let isFlush = false

  const _debounce = (...args: Parameters<T>) => {
    _args = args
    if (enableWork) {
      // 如果被取消防抖且防抖前执行，则执行前设置enableWork
      if (!isCancel && isBefore) {
        enableWork = false
      }
      return fn(...args)
    }

    timer = customFn(timer, isCancel, (_timer, _enableWork) => {
      timer = _timer
      enableWork = _enableWork
      // 如果是节流前执行，不需要再次调用。
      if (!isBefore && !isFlush) {
        isFlush = false
        _debounce(...(_args ?? []))
      }
    })
  }

  /**
   * 立即执行
   * @returns 返回执行函数返回的数据
   */
  _debounce.flush = () => {
    isFlush = true
    fn(...(_args ?? []))
  }
  /**
   * 取消防抖
   * @param flush 是否立即执行待执行任务
   */
  _debounce.cancel = (flush = true) => {
    // 如果有延时器则清除
    if (!isNull(timer)) {
      clearTimeout(timer)
      timer = null
      if (flush) {
        _debounce.flush()
      }
    }
    // 允许执行
    enableWork = true
    // 标记已取消防抖
    isCancel = true
  }
  /**
   * 撤销取消防抖
   */
  _debounce.revokeCancel = () => {
    if (isCancel) {
      isCancel = false
      enableWork = false
    }
  }

  return _debounce as _DebounceCommonFn<T>
}

export type Filter<T> =
  | keyof T
  | Array<keyof T>
  | ((target: T, v: T) => boolean)

export type FilterOptions<T> = {
  filter?: Filter<T>
}
