import type { AnyFunction } from '../_private'
import { isFunction } from '../is'

type FirstReturnType<Fns extends Array<AnyFunction>> = Fns extends [
  infer First,
  ...infer _,
]
  ? First extends AnyFunction
    ? ReturnType<First>
    : never
  : never

type LastParameters<Fns extends Array<AnyFunction>> = Fns extends [
  ...infer _,
  infer Last,
]
  ? Last extends AnyFunction
    ? Parameters<Last>
    : never
  : never

/**
 * 函数组合
 *
 * 函数执行顺序是从右到左
 * @param fns 要组合的函数
 * @returns 返回组合后的函数
 *
 * @example
 * const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
 * const great20 = (list: Array<number>) => list.filter((v) => v > 20);
 * const fn = compose(great20, getEven);
 * fn([2, 5, 7, 20, 23, 24, 25, 29, 35, 36]); // [24, 36]
 */
export const compose = <Fns extends Array<AnyFunction>>(
  ...fns: Fns
): ((...args: LastParameters<Fns>) => FirstReturnType<Fns>) => {
  const isAllFn = fns.every(isFunction)
  if (!isAllFn) {
    throw new Error('参数应全是函数')
  }

  return (...args: LastParameters<Fns>) =>
    fns.reverse().reduce((prev, fn, i) => {
      const data = (i === 0 ? prev : [prev]) as LastParameters<Fns>
      return fn(...data)
    }, args) as FirstReturnType<Fns>
}
