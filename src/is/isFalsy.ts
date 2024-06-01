/**
 * 是否为假值(false或者可以隐式转换成false的值)
 *
 * `假值`：
 *  - false
 *  - null
 *  - undefined
 *  - 0
 *  - ""
 *  - NaN
 * @param v 要判断的变量
 * @returns 如果是假值则返回true，否则返回false
 *
 * @example
 * isFalsy(false); // true
 * isFalsy(1); // false
 */
export const isFalsy = (v: unknown): v is false | null | undefined | 0 | '' =>
  !v
