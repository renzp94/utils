/**
 * 是否为bigint类型
 * @param v 要判断的变量
 * @returns 如果是bigint则返回true，否则返回false
 *
 * @example
 * isBigint(1n); // true
 * isBigint(1); // false
 */
export const isBigint = (v: unknown): v is bigint => typeof v === 'bigint'
