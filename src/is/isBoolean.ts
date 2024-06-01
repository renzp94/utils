/**
 * 是否为boolean类型
 * @param v 要判断的变量
 * @returns 如果是boolean则返回true，否则返回false
 *
 * @example
 * isBoolean(false); // true
 * isBoolean(1); // false
 */
export const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean'
