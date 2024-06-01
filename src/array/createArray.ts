import { isFunction } from '../is'

/**
 * 创建数组
 * @param length 数组长度
 * @param value 填充元素
 * @returns 返回创建的数组
 *
 * @example
 * createArray(2); // []
 * createArray(2).length; // 2
 * createArray(2, 0); // [0, 0]
 * createArray(2, (i) => i * 2); // [0, 2]
 */
export const createArray = <T = any>(
  length = 0,
  value?: T | ((index: number) => T),
): Array<T> => {
  return Array.from({ length }).map<T>((_: unknown, index: number) => {
    if (isFunction(value)) {
      return value(index) as T
    }

    return value as T
  })
}
