import { _find } from './_private'

/**
 * 获取数组最后一个元素
 * @param list 目标数组
 * @param defaultValue 默认值
 * @returns 返回数组最后一个元素，如果没有则返回defaultValue
 *
 * @example
 * last([1, 2, 3]); // 3
 * last([], 2); // 2
 */
export const last = <T>(list: Array<T>, defaultValue?: T): T | undefined =>
  _find(list, list.length - 1, defaultValue)
