import { isArray, isFunction, isNumber } from '../is'
import { deepClone } from '../other'

/**
 * 数组删除
 * @param list 目标数组
 * @param filter 删除规则(数组下标|删除元素数组|删除函数)
 * @returns 返回一个数组: [删除后的数组，删除元素的数组]
 *
 * @example
 * remove([1, 2, 3], 1); // [[1, 3], [2]]
 * remove([1, 2, 3], -1); // [[1, 2], [3]]
 * remove([1, 2, 3], 4); // [[1, 2, 3], []]
 * remove([1, 2, 3], [1, 2]); // [[3], [1, 2]]
 * remove([1, 2, 3, 4, 5], (v) => v % 2 === 0); // [[1, 3, 5], [2, 4]]
 */
export const remove = <T>(
  list: Array<T>,
  filter:
    | number
    | Array<T>
    | ((v: T, index: number, list: Array<T>) => boolean),
): [Array<T>, Array<T>] => {
  if (!isArray(list)) {
    throw new Error('参数list需要是一个数组类型')
  }

  let _list = deepClone(list)
  let removeValues: Array<T> = []

  if (isNumber(filter)) {
    if (Math.abs(filter) <= _list.length) {
      removeValues = _list.splice(filter, 1)
    }
    return [_list, removeValues]
  }

  if (isArray(filter)) {
    removeValues = _list.filter((v) => filter.includes(v))
  } else if (isFunction(filter)) {
    removeValues = _list.filter(filter)
  }

  _list = _list.filter((v) => !removeValues.includes(v))

  return [_list, removeValues]
}
