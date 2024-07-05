/**
 * 调用变量的toString
 * @param v 变量
 * @returns 返回toString返回的数据
 */
export const _toString = (v: unknown): string =>
  Object.prototype.toString.call(v)

/**
 * 排除假值类型
 */
export type _ExcludeFalsy<T> = T extends false | null | undefined | 0 | ''
  ? never
  : T

export type Filter<T> =
  | keyof T
  | Array<keyof T>
  | ((target: T, v: T) => boolean)

export type FilterOptions<T> = {
  filter?: Filter<T>
}

export type AnyFunction = (...args: any[]) => any
