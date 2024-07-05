import { _maxMin } from './_private'

/**
 * 获取数组中的最小值
 * @param list 目标数组
 * @param filter 对象key或过滤函数
 * @returns 如果找到则返回最小值否则返回undefined
 *
 * @example
 * min([1, 2, 3, 4]); // 1
 * const list = [
 *   { name: '张小三', age: 12 },
 *   { name: '李四', age: 20 },
 *   { name: '王小五', age: 18 },
 * ];
 * min(list, 'age'); // { name: '张小三', age: 12 }
 * min(list, (v) => v.name); // { name: '李四', age: 20 }
 */
export const min = <T extends Record<any, any> | string | number>(
  list: Array<T> | Set<T>,
  filter?: keyof T | ((v: T) => T[keyof T]),
): T | undefined => _maxMin(list, 'min', filter)
