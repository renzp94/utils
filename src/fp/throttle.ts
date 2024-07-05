import { isNull } from '../is'
import { _debounceCommon } from './_private'

export interface ThrottleOptions {
  time?: number
  callTiming?: 'before' | 'after'
}

export type ThrottleFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
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
): ThrottleFn<T> => {
  return _debounceCommon(
    fn,
    time,
    callTiming,
    (_timer, _isCancel, callback) => {
      let timer = _timer
      // 如果被取消节流则不需要延时执行
      if (!_isCancel && isNull(timer)) {
        timer = setTimeout(() => {
          // 执行了之后就清空变量
          callback(null, true)
        }, time)
      }
      return timer
    },
  ) as ThrottleFn<T>
}
