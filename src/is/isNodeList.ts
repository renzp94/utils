/**
 * 是否为NodeList类型
 * @param v 要判断的变量
 * @returns 如果是NodeList类型则返回true，否则返回false
 *
 * @example
 * isNodeList([]); // false
 * isNodeList(document.querySelectorAll('div')); // true
 */
export const isNodeList = (v: unknown): v is NodeList => v instanceof NodeList
