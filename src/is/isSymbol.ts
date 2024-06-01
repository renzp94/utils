/**
 * 是否为symbol类型
 * @param v 要判断的变量
 * @returns 如果是symbol则返回true，否则返回false
 *
 * @example
 * isSymbol(Symbol(0)); // true
 * isSymbol(0); // false
 */
export const isSymbol = (v: unknown): v is symbol => typeof v === 'symbol'
