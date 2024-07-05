import { _maxMin } from './_private'

/**
 * 获取数组或Set中的最大值
 * @param list 目标数组或Set
 * @param filter 对象key或过滤函数
 * @returns 如果找到则返回最大值否则返回undefined
 *
 * @example
 * max([1, 2, 3, 4]); // 4
 * const list = [
 *   { name: '张三', age: 12 },
 *   { name: '李四', age: 20 },
 *   { name: '王小五', age: 18 },
 * ];
 * max(list, 'age'); // { name: '李四', age: 20 }
 * max(list, (v) => v.name); // { name: '王小五', age: 18 }
 */
export const max = <T extends Record<any, any> | string | number>(
  list: Array<T> | Set<T>,
  filter?: keyof T | ((v: T) => T[keyof T]),
): T | undefined => _maxMin(list, 'max', filter)
