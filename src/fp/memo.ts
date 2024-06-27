import { type AnyFunction, _toString } from '../_base'
import { isFunction } from '../is'

export type MemoReturnType<T extends AnyFunction> = ((
  ...args: Parameters<T>
) => ReturnType<T>) & {
  clear: () => void
  remove: (key: any) => void
  set: (key: any, data: ReturnType<T>) => void
}

export type MemoOptions<T extends AnyFunction> = {
  key?: (...args: Parameters<T>) => any
  max?: number
}

/**
 * 函数缓存
 * @param fn 要缓存的函数
 * @param options 配置
 * @returns 返回带缓存的函数
 *
 * @example
 * let runCount = 0;
 * const add = (a: number, b: number) => {
 *   runCount++;
 *   return a + b;
 * };
 * const addMemo = memo(add);
 * addMemo(1, 1);
 * addMemo(1, 1);
 * addMemo(2, 2);
 * console.log(runCount); // 2
 */
export const memo = <T extends AnyFunction>(
  fn: T,
  options?: MemoOptions<T>,
): MemoReturnType<T> => {
  if (!isFunction(fn)) {
    throw new Error('参数fn应该为函数')
  }
  const { key, max = 10 } = options ?? {}
  const cache = new Map()
  const memoFn = (...args: Parameters<T>) => {
    const cacheKey = JSON.stringify(isFunction(key) ? key(...args) : args)

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    if (cache.size > 0 && cache.size === max) {
      const firstKey = cache.entries().next().value[0]
      cache.delete(firstKey)
    }

    const result = fn(...args)
    cache.set(cacheKey, result)
    return result
  }

  memoFn.clear = () => cache.clear()
  memoFn.remove = (key: any) => cache.delete(JSON.stringify(key))
  memoFn.set = (key: any, data: ReturnType<T>) =>
    cache.set(JSON.stringify(key), data)

  return memoFn
}
