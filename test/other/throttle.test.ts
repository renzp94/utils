import { expect, test } from 'bun:test'
import { throttle } from '../../src'

test('默认节流时间为300ms', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('默认节流时间为300ms run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('默认节流时间为300ms => 结束')
  setTimeout(() => expect(value).toEqual(0), 299)
  setTimeout(() => expect(value).toEqual(2), 300)
})

test('没有节流', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('没有节流 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn, -1)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('没有节流 => 结束')
  expect(value).toEqual(2)
})

test('没有节流但流转到下一个执行周期', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('没有节流但流转到下一个执行周期 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn, 0)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('没有节流但流转到下一个执行周期 => 结束')
  setTimeout(() => {
    expect(value).toEqual(2)
  }, 0)
})

test('设置节流时间为1s', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置节流时间为1s run fn: ', count)
    value = count
  }

  const _fn = throttle(fn, 1000)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('设置节流时间为1s => 结束')
  setTimeout(() => expect(value).toEqual(0), 999)
  setTimeout(() => expect(value).toEqual(2), 1000)
})

test('设置节流时机', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置节流时机 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn, 300, 'before')
  _fn(1)
  expect(value).toEqual(1)
  _fn(2)
  // console.log('设置节流时机 => 结束')
  setTimeout(() => expect(value).toEqual(1), 300)
})

test('设置节流然后立即执行', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置节流但需要直接调用 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('设置节流但需要直接调用 => 结束')
  _fn.flush()
  expect(value).toEqual(2)
})

test('先取消节流，再调用', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先取消节流，再调用 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  _fn.cancel()
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先取消节流，再调用 => 结束')
  expect(value).toEqual(2)
})

test('先调用，再取消节流，执行最后一次任务', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先调用，再取消节流，执行最后一次任务 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  _fn.cancel()
  // console.log('先调用，再取消节流，执行最后一次任务 => 结束')
  expect(value).toEqual(2)
})

test('先调用，再取消节流，不执行最后一次任务', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先调用，再取消节流，不执行最后一次任务 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  _fn.cancel(false)
  // console.log('先调用，再取消节流，不执行最后一次任务 => 结束')
  expect(value).toEqual(0)
})

test('先使用节流调用再取消节流', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先使用节流调用再取消节流 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn, 3000)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先使用节流调用再取消节流 => 结束')
  setTimeout(() => expect(value).toEqual(4), 3000)
  _fn.cancel()
  for (let i = 2; i < 5; i++) {
    _fn(i)
  }
  expect(value).toEqual(4)
})

test('fn不是函数', () => {
  expect(() => {
    throttle(1 as any)
  }).toThrowError('参数fn应该为函数')
})

test('先取消节流，再撤销取消节流', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先取消节流，再撤销取消节流 run fn: ', count)
    value = count
  }

  const _fn = throttle(fn)
  _fn.cancel()
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先取消节流，再撤销取消节流 => 结束')
  expect(value).toEqual(2)
  _fn.revokeCancel()
  value = 0
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  expect(value).toEqual(0)
  setTimeout(() => expect(value).toEqual(2), 300)
})
