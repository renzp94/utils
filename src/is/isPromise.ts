import { _toString } from '../_private'

/**
 * 是否为Promise类型或async函数
 * @param v 要判断的变量
 * @returns 如果是Promise类型或async函数则返回true，否则返回false
 *
 * @example
 * isPromise(new Promise(() => {})); // true
 * isPromise(async () => {}); // true
 */
export const isPromise = <T = any>(v: unknown): v is Promise<T> =>
  ['[object Promise]', '[object AsyncFunction]'].includes(_toString(v))
