import { isArray, isNodeList, isSet, isString } from '../is'

type ReverseReturnType<T extends string | Array<any> | Set<any>> = T extends [
  infer First,
  ...infer Rest,
]
  ? [...ReverseReturnType<Rest>, First]
  : T extends `${infer FirstChar}${infer RestChar}`
    ? `${ReverseReturnType<RestChar>}${FirstChar}`
    : T

/**
 * 反转数据
 *
 * 注意：此方法仅适用于`简单字符串`、`数组`、`Set`
 *
 * @param v 要反转的数据
 * @returns 返回反转后的数据
 *
 * @example
 * reverse('Hello World!'); // '!dlroW olleH'
 * reverse([1, 2, false]); // [false, 2, 1]
 * reverse(new Set([1, 2, false])); // Set(3) {false, 2, 1}
 */
export const reverse = <T extends string | Array<any> | Set<any>>(
  v: T,
): ReverseReturnType<T> => {
  if (isString(v)) {
    return v.split('').reverse().join('') as ReverseReturnType<T>
  }

  if (isArray(v)) {
    return v.toReversed() as ReverseReturnType<T>
  }

  if (isSet(v)) {
    const _list = Array.from(v)
    _list.reverse()

    return new Set(_list) as ReverseReturnType<T>
  }

  return v as ReverseReturnType<T>
}
