import { _toString } from '../_base'

/**
 * 是否为ArrayBuffer类型
 * @param v 要判断的变量
 * @returns 如果是ArrayBuffer则返回true，否则返回false
 *
 * @example
 * isArrayBuffer(new ArrayBuffer(0)); // true
 * isArrayBuffer([1]); // false
 */
export const isArrayBuffer = (v: unknown): v is ArrayBuffer =>
  _toString(v) === '[object ArrayBuffer]'
