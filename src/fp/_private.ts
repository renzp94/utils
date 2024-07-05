import { isFunction, isNull } from '../is'

export type _DebounceCommonFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
}

export const _debounceCommon = <T extends (...args: any) => any>(
  fn: T,
  time: number,
  callTiming: 'before' | 'after',
  customFn: (
    timer: Timer | null,
    isCancel: boolean,
    callback: (timer: Timer | null, enableWork: boolean) => void,
  ) => Timer | null,
): _DebounceCommonFn<T> => {
  if (!isFunction(fn)) {
    throw new Error('参数fn应该为函数')
  }

  const isBefore = callTiming === 'before'
  let enableWork = isBefore || time < 0
  let timer: Timer | null = null
  let _args: Parameters<T>
  let isCancel = false
  let isFlush = false

  const _debounce = (...args: Parameters<T>) => {
    _args = args
    if (enableWork) {
      // 如果被取消防抖且防抖前执行，则执行前设置enableWork
      if (!isCancel && isBefore) {
        enableWork = false
      }
      return fn(...args)
    }

    timer = customFn(timer, isCancel, (_timer, _enableWork) => {
      timer = _timer
      enableWork = _enableWork
      // 如果是节流前执行，不需要再次调用。
      if (!isBefore && !isFlush) {
        isFlush = false
        _debounce(...(_args ?? []))
      }
    })
  }

  /**
   * 立即执行
   * @returns 返回执行函数返回的数据
   */
  _debounce.flush = () => {
    isFlush = true
    fn(...(_args ?? []))
  }
  /**
   * 取消防抖
   * @param flush 是否立即执行待执行任务
   */
  _debounce.cancel = (flush = true) => {
    // 如果有延时器则清除
    if (!isNull(timer)) {
      clearTimeout(timer)
      timer = null
      if (flush) {
        _debounce.flush()
      }
    }
    // 允许执行
    enableWork = true
    // 标记已取消防抖
    isCancel = true
  }
  /**
   * 撤销取消防抖
   */
  _debounce.revokeCancel = () => {
    if (isCancel) {
      isCancel = false
      enableWork = false
    }
  }

  return _debounce as _DebounceCommonFn<T>
}
