/**
 * 是否为function类型
 * @param v 要判断的变量
 * @returns 如果是function则返回true，否则返回false
 *
 * @example
 * const a = () => {};
 * isFunction(a); // true
 * const b = 1;
 * isFunction(b); // false
 */
export const isFunction = <T extends Function>(v: unknown): v is T =>
  typeof v === 'function'
