/**
 * 是否为number类型
 * @param v 要判断的变量
 * @returns 如果是number则返回true，否则返回false
 *
 * @example
 * isNumber(1); // true
 * isNumber('1'); // false
 */
export const isNumber = (v: unknown): v is number => typeof v === 'number'
