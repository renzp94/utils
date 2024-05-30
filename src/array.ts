import { _find } from './_base'
import { isArray, isDef, isUnDef } from './is'
import { removeKey } from './object'

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

export interface FlattenOptions {
  // 如果是对象数组，指定深度扁平化的属性
  deepKey?: string
  // 扁平化的深度最小为1，默认为Number.POSITIVE_INFINITY(无限深度)
  depth?: number
}
type Flatten<T = any> = (list: Array<T>, options?: FlattenOptions) => Array<T>
/**
 * 扁平化数组
 *
 * 注意：`options.depth`小于等于0时将不进行扁平化操作
 *
 * @param list 要扁平化的数组
 * @param {FlattenOptions} options 配置
 * @returns 返回扁平化后的数组
 *
 * @example
 * flatten([[1], 2, [3]]); // [1, 2, 3]
 * flatten([[1, 2], 3, [4, [5]]]); // [1, 2, 3, 4, 5]
 * flatten([[1, 2], 3, [4, [5]]], { depth: 1 }); // [1, 2, 3, 4, [5]]
 * const a = flatten(
 *    [
 *      {
 *        label: '1-1',
 *        value: '1-1',
 *        children: [
 *          {
 *            label: '2-1',
 *            value: '2-1',
 *            children: [{ label: '3-1', value: '3-1' }],
 *          },
 *          { label: '2-2', value: '2-2' },
 *        ],
 *      },
 *      { label: '1-2', value: '1-2' },
 *    ],
 *    { deepKey: 'children' },
 *  );
 * console.log(JSON.stringify(a)); // [{"label":"1-1","value":"1-1"},{"label":"2-1","value":"2-1"},{"label":"3-1","value":"3-1"},{"label":"2-2","value":"2-2"},{"label":"1-2","value":"1-2"}]
 */
export const flatten: Flatten = (list, options) => {
  const { deepKey, depth = Number.POSITIVE_INFINITY } = options ?? {}
  // 如果depth小于0则不扁平化
  if (depth <= 0) {
    return list
  }
  // 如果不存在deepKey则直接使用flat方法进行扁平化
  if (isUnDef(deepKey)) {
    return list.flat(depth ?? Number.POSITIVE_INFINITY)
  }
  // 根据指定的deepKey进行扁平化
  let level = 0
  const _flatten: Flatten = (list) => {
    level++
    const isCanDeep = level < depth

    return list.reduce(
      (prev: Parameters<Flatten>[0], curr: Parameters<Flatten>[0][0]) => {
        if (isCanDeep) {
          const target: Parameters<Flatten>[0][0] = removeKey(curr, deepKey)

          return [
            ...prev,
            target,
            ...(curr[deepKey] ? _flatten(curr[deepKey]) : []),
          ]
        }

        return [...prev, ...(isArray(curr) ? curr : [curr])]
      },
      [],
    ) as ReturnType<Flatten>
  }

  return _flatten(list, options)
}
