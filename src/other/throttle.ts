import { isFunction, isNull } from '../is'

export interface ThrottleOptions {
  time?: number
  callTiming?: 'before' | 'after'
}

/**
 * 创建节流函数
 * @param fn 要执行的函数
 * @param time 节流时间
 * @param callTiming 执行时机
 * @returns 返回一个节流函数
 *
 * @example
 * let value = 0;
 * const fn = (count: number) => {
 *   value = count
 * };
 *
 * const _fn = throttle(fn);
 * _fn(1);
 * console.log(value); // 0
 * setTimeout(() => console.log(value), 300); // 1
 */
export const throttle = <T extends (...args: any) => any>(
  fn: T,
  time = 300,
  callTiming: 'before' | 'after' = 'after',
): T & { flush: () => void; cancel: (noWork?: boolean) => void } => {
  if (!isFunction(fn)) {
    throw new Error('参数fn应该为函数')
  }

  const isBefore = callTiming === 'before'
  let enableWork = isBefore || time < 0
  let timer: Timer | null = null
  let _args: Parameters<T>
  let isCancel = false

  const _throttle = (...args: Parameters<T>) => {
    _args = args
    if (enableWork) {
      // 如果节流前执行，则执行前设置enableWork
      if (isBefore) {
        enableWork = false
      }
      return fn(...args)
    }
    // 如果被取消节流则不需要延时执行
    // 并且
    if (!isCancel && isNull(timer)) {
      timer = setTimeout(() => {
        // 执行了之后就清空变量
        timer = null
        enableWork = true
        // 如果是节流前执行，不需要再次调用。
        if (!isBefore) {
          _throttle(..._args)
        }
        isCancel = false
      }, time)
    }
  }

  _throttle.flush = () => fn(..._args)
  _throttle.cancel = (flush = true) => {
    // 如果有延时器则清除
    if (!isNull(timer)) {
      clearTimeout(timer)
      if (flush) {
        _throttle.flush()
      }
    }
    // 允许执行
    enableWork = true
    // 标记已取消节流
    isCancel = true
  }

  return _throttle as any
}
