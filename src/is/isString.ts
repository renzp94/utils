/**
 * 是否为string类型
 * @param v 要判断的变量
 * @returns 如果是string则返回true，否则返回false
 *
 * @example
 * isString('1'); // true
 * isString(1); // false
 */
export const isString = (v: unknown): v is string => typeof v === 'string'
