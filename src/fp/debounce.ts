import { isNull } from '../is'
import { _debounceCommon } from './_private'

export type DebounceOptions = {}

export type DebounceFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
}

/**
 * 创建防抖函数
 * @param fn 要执行的函数
 * @param time 防抖时间
 * @param callTiming 执行时机
 * @returns 返回一个防抖函数
 *
 * @example
 * let value = 0;
 *  const fn = (count: number) => {
 *    value = count;
 *  };

 *  const _fn = debounce(fn);
 *  for (let i = 0; i < 3; i++) {
 *    // time: 504
 *    // 100*(i=0) = 0 +
 *    // 100*(i=1) = 100 +
 *    // 100*(i=2) - 100*(i=1) = 100 +
 *    // 防抖间隔 = 300 +
 *    // 容错时间(setTimeout存在大概4ms误差) = 4
 *    setTimeout(() => {
 *      _fn(i);
 *    }, 100 * i);
 *  }
 *  setTimeout(() => console.log(value), 299); // 0
 *  setTimeout(() => console.log(value), 300); // 0
 *  setTimeout(() => console.log(value), 504); // 2
 */
export const debounce = <T extends (...args: any) => any>(
  fn: T,
  time = 300,
  callTiming: 'before' | 'after' = 'after',
): DebounceFn<T> => {
  return _debounceCommon(
    fn,
    time,
    callTiming,
    (_timer, _isCancel, callback) => {
      let timer = _timer
      if (!isNull(timer)) {
        clearTimeout(timer)
        timer = null
      }
      if (!_isCancel) {
        timer = setTimeout(() => {
          callback(null, true)
        }, time)
      }
      return timer
    },
  ) as DebounceFn<T>
}
