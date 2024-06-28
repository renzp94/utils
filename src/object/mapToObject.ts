import { isMap } from '../is'

type UnionToIntersection<U> = (U extends U ? (arg: U) => void : never) extends (
  arg: infer T,
) => void
  ? T
  : never

export type MapToObjectReturnType<T> = UnionToIntersection<
  T extends Map<infer K, infer V>
    ? K extends keyof any
      ? { [Key in K]: V }
      : never
    : never
>
/**
 * Map转对象
 * @param v 目标Map
 * @returns 返回转换后的对象
 *
 * @example
 * mapToObject(
 *   new Map([['a', 1], ['b', '2'], ['c', false], ]),
 * ); // { a: 1, b: '2', c: false }
 */
export const mapToObject = <T extends Map<string | number | symbol, any>>(
  v: T,
): MapToObjectReturnType<T> =>
  (isMap(v)
    ? Array.from(v.keys() as unknown as ArrayLike<string>).reduce(
        (prev, key) => ({ ...prev, [key]: v.get(key) }),
        {},
      )
    : {}) as MapToObjectReturnType<T>
