/**
 * 是否为Array类型
 * @param v 要判断的变量
 * @returns 如果是Array则返回true，否则返回false
 *
 * @example
 * isArray([]); // true
 * isArray({ length: 1 }); // false
 */
export const isArray = <T = any>(v: unknown): v is Array<T> => Array.isArray(v)
