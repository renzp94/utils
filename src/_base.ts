/**
 * 调用变量的toString
 * @param v 变量
 * @returns 返回toString返回的数据
 */
export const _toString = (v: unknown): string =>
  Object.prototype.toString.call(v)

/**
 * 排除undefined和null类型
 */
export type _ExcludeUndefinedNull<T> = T extends undefined | null ? never : T

/**
 * 排除假值类型
 */
export type _ExcludeFalsy<T> = T extends false | null | undefined | 0 | ''
  ? never
  : T
