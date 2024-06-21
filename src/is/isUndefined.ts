/**
 * 是否为undefined
 * @param v 要判断的变量
 * @returns 如果是undefined则返回true，否则返回false
 *
 * @example
 * const a = 1;
 * isUndefined(a); // false
 * let b;
 * isUndefined(b); // true
 */
export const isUndefined = (v: unknown): v is undefined =>
  typeof v === 'undefined'
