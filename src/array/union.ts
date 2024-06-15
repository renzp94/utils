import { isArray, isDef, isFunction, isObject, isString, isUnDef } from '../is'
import { deepClone } from '../other'
import { flatten } from './flatten'
import { last } from './last'
import { remove } from './remove'
import { type UniqueOptions, unique } from './unique'

type UnionOptions<T> = UniqueOptions<T>

/**
 * 数组取并集
 *
 * `入参说明`: 如果不需要配置则可以只传目标数组，如果需要则最后一个元素传配置项
 * @param ...args 目标数组参数或配置`[...Array, options?]`
 * @returns 返回一个只有并集部分的数组
 *
 * @example
 * union([1, 1, 2, 3], [4, 3]); // [1, 2, 3, 4]
 * union([1, false, 2], [false, 4, 1])); // [1, false, 2, 4]
 * union([1, '1', 2, 3], [4, 3, '1'])); // [1, '1', 2, 3, 4]
 * union([1, '1', 2, 3], [4, 3, '1'], { strict: false }); // [1, 2, 3, 4]
 * union(
 *   [
 *     { a: 1, b: 1 },
 *     { a: 2, b: 1 },
 *     { a: 3, b: 1 },
 *   ],
 *   [
 *     { a: 1, b: 1 },
 *     { a: 2, b: 2 },
 *     { a: 3, b: 3 },
 *     { a: 3, b: 2 },
 *     { a: 4, b: 2 },
 *   ],
 *   { filter: 'a' },
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }, { a: 4, b: 2 }]
 */
export const union = <T>(
  ...args: [...Array<Array<T>>] | [...Array<Array<T>>, UnionOptions<T>]
): [...Array<T>] => {
  let _args = args as [...Array<Array<T>>]
  let options: UnionOptions<T> | undefined = last(args) as UnionOptions<T>

  if (isObject(options) && (isDef(options?.filter) || isDef(options?.strict))) {
    ;[_args] = remove(_args, -1)
  } else {
    options = undefined
  }

  if (!_args.every(isArray)) {
    console.warn('参数中要处理的目标数组有不是数组类型的数据')
    return []
  }

  return unique(flatten(_args), options)
}
