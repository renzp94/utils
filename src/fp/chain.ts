import { type AnyFunction, _toString } from '../_private'
import { isDef, isEmpty, isFunction, isObject } from '../is'

export const CHAIN_FNS = Symbol('chainFns')

export type ChainFns<T extends Record<string | number | symbol, AnyFunction>> =
  {
    [k in keyof T extends string ? keyof T : keyof T]: (
      ...args: Parameters<T[k]> extends undefined
        ? never
        : Parameters<T[k]> extends [infer _, ...infer Rest]
          ? Rest
          : never
    ) => ChainReturn<T>
  }

export type ChainValue<
  T extends Record<string | number | symbol, AnyFunction>,
> = T extends Record<string, infer P>
  ? P extends AnyFunction
    ? ReturnType<P>
    : never
  : never

export type ChainReturn<
  T extends Record<string | number | symbol, AnyFunction>,
> = {
  [k in keyof T extends string ? keyof T : keyof T]: ChainReturn<T>
} & {
  value?: ChainValue<T>
  [CHAIN_FNS]: ChainFns<T>
}

export type ChainData<T extends Record<string | number | symbol, AnyFunction>> =
  T extends Record<string, infer P>
    ? P extends AnyFunction
      ? Parameters<P> extends [infer First, ...infer _]
        ? First
        : never
      : never
    : never

const _defaultValue = Symbol(undefined)

const validator = <T extends Record<string | number | symbol, AnyFunction>>(
  fns: T,
) => {
  return isObject(fns) && Object.values(fns).every(isFunction)
}

/**
 * 函数链式调用
 * @param fns 函数组成的对象
 * @param data 要处理的数据
 * @param defaultValue 默认值
 * @returns 返回一个链式调用的对象
 *
 * @example
 * const str = '2,5,7,20,23,24,25,29,35,36';
 * const toArray = (v: string) => v.split(',');
 * const toNumber = (list: Array<string>) => list.map(Number);
 * const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
 * const greet = (list: Array<number>, min: number) =>
 *   list.filter((v) => v > min);
 * const _toString = (list: Array<number>) => list.toString();
 *
 * const chainFn = chain({toArray, toNumber, getEven, greet, toString: _toString }, str);
 * chainFn.toArray.toNumber.getEven.toString.value; // '2,20,24,36'
 * chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(10).toString.value; // '20,24,36'
 * chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(30).toString.value; // '36'
 */
export const chain = <T extends Record<string | number | symbol, AnyFunction>>(
  fns: T,
  data?: ChainData<T>,
  defaultValue?: ChainValue<T>,
): ChainReturn<T> => {
  if (!validator(fns)) {
    throw new Error('参数fns需要是一个对象且对象的属性值需要是函数')
  }
  const fnNames = Object.keys(fns)
  let _value: ChainValue<T> | typeof _defaultValue =
    defaultValue ?? _defaultValue

  const fnsProxy = fnNames.reduce(
    (prev, name) => ({
      ...prev,
      [name](...args: any) {
        _value = fns[name](_value, ...args)
        return proxy
      },
    }),
    {},
  )

  const proxy: any = new Proxy(
    {},
    {
      get(_, prop: string) {
        if (prop === 'value') {
          if (_value === _defaultValue) {
            return undefined
          }

          const _v = _value
          _value = defaultValue ?? _defaultValue

          return isEmpty(_v) ? defaultValue : _v
        }
        if (fnNames.includes(prop)) {
          _value = fns[prop](
            _value === _defaultValue ||
              (isDef(defaultValue) && _value === defaultValue)
              ? data
              : _value,
          )
          return proxy
        }

        if ((prop as unknown as Symbol) === CHAIN_FNS) {
          return fnsProxy
        }
      },
    },
  )

  return proxy as ChainReturn<T>
}
