import { _find } from '../_base'

/**
 * 获取数组第一个元素
 * @param list 目标数组
 * @param defaultValue 默认值
 * @returns 返回数组第一个元素，如果没有则返回defaultValue
 *
 * @example
 * first([1, 2, 3]); // 1
 * first([], 2); // 2
 */
export const first = <T>(list: Array<T>, defaultValue?: T): T | undefined =>
  _find(list, 0, defaultValue)
