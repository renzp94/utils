import type { AnyFunction } from '../_private'
import { isFunction } from '../is'

type DiffPrefixLoose<T extends readonly any[], O extends any[]> = T extends [
  infer P1,
  ...infer R1,
]
  ? O extends [infer P2, ...infer R2]
    ? P2 extends P1
      ? DiffPrefixLoose<R1, R2>
      : T
    : T
  : T
type ArrToPrefixUnion<A extends any[]> = A extends [infer P, ...infer R]
  ? [P] | [P, ...ArrToPrefixUnion<R>]
  : []

export type CurryFn<T extends AnyFunction> = <
  R extends ArrToPrefixUnion<Parameters<T>>,
>(
  ...args: R
) => DiffPrefixLoose<Parameters<T>, R> extends []
  ? ReturnType<T>
  : CurryFn<(...args: DiffPrefixLoose<Parameters<T>, R>) => ReturnType<T>>

/**
 * 函数柯里化
 * @param fn 需要柯里化的函数
 * @returns 返回柯里化后的函数
 *
 * @example
 * const regValidator = (regExp: RegExp, v: string) => regExp.test(v);
 * curry(regValidator)(/^1[3-9]\d{9}$/, '13311111111'); // true
 *
 * const createValidator = curry(regValidator);
 * const phoneValidator = createValidator(/^1[3-9]\d{9}$/);
 * phoneValidator('13311111111'); // true
 *
 * const emailValidator = createValidator(/^[a-zA-Z0-9_\.\-\+]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/);
 * emailValidator('lisi@qq.com'); // true
 */
export const curry = <F extends AnyFunction>(fn: F): CurryFn<F> => {
  if (!isFunction(fn)) {
    throw new Error('参数fn需要是一个函数')
  }

  return (...args: any[]) => {
    if (args.length >= fn.length) {
      return fn(...args)
    }

    return curry(fn.bind(null, ...args))
  }
}
