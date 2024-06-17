import { isArray, isDef, isFunction, isObject, isString, isUnDef } from '../is'
import { deepClone } from '../other'
import { last } from './last'
import { remove } from './remove'
import { type UniqueOptions, unique } from './unique'

type IntersectionOptions<T> = UniqueOptions<T>

/**
 * 数组取交集
 *
 * `入参说明`: 如果不需要配置则可以只传目标数组，如果需要则最后一个元素传配置项
 * @param ...args 目标数组参数或配置`[...Array, options?]`
 * @returns 返回一个只有交集部分的数组
 *
 * @example
 * intersection([1, 1, 2, 3], [4, 3]); // [3]
 * intersection([1, false, 2], [false, 4, 1])); // [1, false]
 * intersection([1, '1', 2, 3], [4, 3, '1'])); // ['1', 3]
 * intersection([1, '1', 2, 3], [4, 3, '1'], { strict: false }); // [1, 3]
 * intersection(
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
 *   ],
 *   { filter: 'a' },
 * ); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
 */
export const intersection = <T>(
  ...args: [...Array<Array<T>>] | [...Array<Array<T>>, IntersectionOptions<T>]
): [...Array<T>] => {
  let _args = args as [...Array<Array<T>>]
  let options: IntersectionOptions<T> | undefined = last(
    args,
  ) as IntersectionOptions<T>

  if (isObject(options) && (isDef(options?.filter) || isDef(options?.strict))) {
    ;[_args] = remove(_args, -1)
  } else {
    options = undefined
  }

  if (!_args.every(isArray)) {
    console.warn('参数中要处理的目标数组有不是数组类型的数据')
    return []
  }

  const { filter, strict = true } = options ?? {}

  return deepClone(_args).reduce((prev, currList, i) => {
    if (i === 0) {
      return currList
    }

    const list = prev.reduce((_prev, prevValue) => {
      for (const currValue of currList) {
        const isAdd =
          // 如果无过滤器则直接值比对
          (isUnDef(filter) &&
            (strict
              ? prevValue === currValue
              : // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
                prevValue == currValue)) ||
          // 如果有过滤key，则认为数组是对象数组，通过key比较对象属性值是否相同
          (isString(filter) &&
            (strict
              ? prevValue?.[filter] === currValue?.[filter]
              : // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
                prevValue?.[filter] == currValue?.[filter])) ||
          // 如果有过滤key且为数组，则认为数组是对象数组，通过多个key比较对象属性值是否相同
          (isArray(filter) &&
            filter.every((key) =>
              strict
                ? prevValue?.[key] === currValue?.[key]
                : // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
                  prevValue?.[key] == currValue?.[key],
            )) ||
          // 如果是过滤函数，则通过过滤函数返回值判断是否相同
          (isFunction(filter) && filter(prevValue, currValue))

        if (isAdd) {
          _prev.push(prevValue)
          break
        }
      }

      return unique(_prev, { filter, strict: false })
    }, [] as T[])

    return list
  }, []) as [...Array<T>]
}
