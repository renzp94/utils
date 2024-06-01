import { isDef } from './isDef'

/**
 * 是否为无值(即：值为undefined或null)
 * @param v 要判断的变量
 * @returns 如果无值则返回true，否则返回false
 *
 * @example
 * const a = 1;
 * isUnDef(a); // false
 * let b;
 * isUnDef(b); // true
 */
export const isUnDef = (v: unknown): v is undefined | null => !isDef(v)
