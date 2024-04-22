import { isDef } from '../dist'
import { isArray, isUnDef } from './is'
import { removeKey } from './object'

export interface FlattenOptions {
  // 是否深度扁平化
  deep?: boolean
  // 如果是对象数组，指定深度扁平化的属性
  deepKey?: string
  // 扁平化的深度最小为1
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
 * flatten([[1, 2], 3, [4, [5]]], { deep: true }); // [1, 2, 3, 4, 5]
 * flatten([[1, 2], 3, [4, [5]]], { deep: true, depth: 1 }); // [1, 2, 3, 4, [5]]
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
 *    { deep: true, deepKey: 'children' },
 *  );
 * console.log(JSON.stringify(a)); // [{"label":"1-1","value":"1-1"},{"label":"2-1","value":"2-1"},{"label":"3-1","value":"3-1"},{"label":"2-2","value":"2-2"},{"label":"1-2","value":"1-2"}]
 */
export const flatten: Flatten = (list, options) => {
  const { deep, deepKey, depth } = options ?? {}
  // 如果depth小于0则扁平化
  if (isDef(depth) && depth <= 0) {
    return list
  }

  let level = 0

  const _flatten: Flatten = (list) => {
    level++
    const isCanDeep = isUnDef(depth) || level < depth

    return list.reduce(
      (prev: Parameters<Flatten>[0], curr: Parameters<Flatten>[0][0]) => {
        if (deep && isCanDeep) {
          // 根据指定key深度扁平化
          if (deepKey) {
            const target: Parameters<Flatten>[0][0] = removeKey(curr, deepKey)

            return [
              ...prev,
              target,
              ...(curr[deepKey] ? _flatten(curr[deepKey]) : []),
            ]
          }

          return [...prev, ...(isArray(curr) ? _flatten(curr) : [curr])]
        }

        return [...prev, ...(isArray(curr) ? curr : [curr])]
      },
      [],
    ) as ReturnType<Flatten>
  }

  return _flatten(list, options)
}
