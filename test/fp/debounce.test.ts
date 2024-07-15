import { expect, test } from 'bun:test'
import { debounce } from '../../src'

test('默认防抖时间为300ms', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('默认防抖时间为300ms run fn: ', count)
    value = count
  }

  const _fn = debounce(fn)
  for (let i = 0; i < 3; i++) {
    // time: 504
    // 100*(i=0) = 0 +
    // 100*(i=1) = 100 +
    // 100*(i=2) - 100*(i=1) = 100 +
    // 防抖间隔 = 300 +
    // 容错时间(setTimeout存在大概4ms误差) = 4
    setTimeout(() => {
      _fn(i)
    }, 100 * i)
  }
  // console.log('默认防抖时间为300ms => 结束')
  setTimeout(() => expect(value).toEqual(0), 299)
  setTimeout(() => expect(value).toEqual(0), 300)
  setTimeout(() => expect(value).toEqual(2), 504)
})

test('没有防抖', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('没有防抖 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, -1)
  for (let i = 0; i < 3; i++) {
    // time: 200
    // 100*(i=0) = 0 +
    // 100*(i=1) = 100 +
    // 100*(i=2) - 100*(i=1) = 100
    setTimeout(() => {
      _fn(i)
    }, 100 * i)
  }
  // console.log('没有防抖 => 结束')
  expect(value).toEqual(0)
  setTimeout(() => expect(value).toEqual(1), 100)
  setTimeout(() => expect(value).toEqual(2), 200)
})

test('没有防抖但流转到下一个执行周期', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('没有防抖但流转到下一个执行周期 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, 0)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('没有防抖但流转到下一个执行周期 => 结束')
  expect(value).toEqual(0)
  setTimeout(() => {
    expect(value).toEqual(2)
  }, 1)
})

test('设置防抖时间为1s', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置防抖时间为1s run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, 1000)
  for (let i = 0; i < 3; i++) {
    // time: 1204
    // 100*(i=0) = 0 +
    // 100*(i=1) = 100 +
    // 100*(i=2) - 100*(i=1) = 100 +
    // 防抖间隔 = 1000 +
    // 容错时间(setTimeout存在大概4ms误差) = 4
    setTimeout(() => {
      _fn(i)
    }, 100 * i)
  }
  // console.log('设置防抖时间为1s => 结束')
  setTimeout(() => expect(value).toEqual(0), 999)
  setTimeout(() => expect(value).toEqual(0), 1000)
  setTimeout(() => expect(value).toEqual(2), 1204)
})

test('设置防抖时机', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置防抖时机 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, 300, 'before')
  _fn(1)
  expect(value).toEqual(1)
  _fn(2)
  // console.log('设置防抖时机 => 结束')
  setTimeout(() => expect(value).toEqual(1), 600)
})

test('设置防抖然后立即执行', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('设置防抖但需要直接调用 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, 1000)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('设置防抖但需要直接调用 => 结束')
  _fn.flush()
  expect(value).toEqual(2)
})

test('先取消防抖，再调用', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先取消防抖，再调用 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn)
  _fn.cancel()
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先取消防抖，再调用 => 结束')
  expect(value).toEqual(2)
})

test('先调用，再取消防抖，执行最后一次任务', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先调用，再取消防抖，执行最后一次任务 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  _fn.cancel()
  // console.log('先调用，再取消防抖，执行最后一次任务 => 结束')
  expect(value).toEqual(2)
})

test('先调用，再取消防抖，不执行最后一次任务', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先调用，再取消防抖，不执行最后一次任务 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  _fn.cancel(false)
  // console.log('先调用，再取消防抖，不执行最后一次任务 => 结束')
  expect(value).toEqual(0)
})

test('先使用防抖调用再取消防抖', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先使用防抖调用再取消防抖 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn, 3000)
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先使用防抖调用再取消防抖 => 结束')
  setTimeout(() => expect(value).toEqual(4), 3000)
  _fn.cancel()
  for (let i = 2; i < 5; i++) {
    _fn(i)
  }
  expect(value).toEqual(4)
})

test('fn不是函数', () => {
  expect(() => {
    debounce(1 as any)
  }).toThrowError('参数fn应该为函数')
})

test('先取消防抖，再撤销取消防抖', () => {
  let value = 0
  const fn = (count: number) => {
    // console.log('先取消防抖，再撤销取消防抖 run fn: ', count)
    value = count
  }

  const _fn = debounce(fn)
  _fn.cancel()
  for (let i = 0; i < 3; i++) {
    _fn(i)
  }
  // console.log('先取消防抖，再撤销取消防抖 => 结束')
  expect(value).toEqual(2)
  _fn.revokeCancel()
  value = 0
  for (let i = 0; i < 3; i++) {
    // time: 504
    // 100*(i=0) = 0 +
    // 100*(i=1) = 100 +
    // 100*(i=2) - 100*(i=1) = 100 +
    // 防抖间隔 = 300 +
    // 容错时间(setTimeout存在大概4ms误差) = 4
    setTimeout(() => {
      _fn(i)
    }, 100 * i)
  }
  // console.log('默认防抖时间为300ms => 结束')
  setTimeout(() => expect(value).toEqual(0), 299)
  setTimeout(() => expect(value).toEqual(0), 300)
  setTimeout(() => expect(value).toEqual(2), 504)
})

test('防抖异步函数', async () => {
  let count = 0
  const fn = async () => {
    // console.log('防抖异步函数 run fn: ', count)
    return new Promise((resolve) => {
      setTimeout(() => {
        count++
        resolve(count)
      }, 150)
    })
  }
  // console.log('防抖异步函数 => 结束')
  const _fn = debounce(fn, 200, 'before')
  const data1 = await _fn()
  const data2 = await _fn()
  setTimeout(() => expect(data1).toEqual(1), 149)
  setTimeout(() => expect(data2).toEqual(1), 310)
})

test('防抖异步函数', async () => {
  let count = 0
  const fn = async () => {
    // console.log('防抖异步函数 run fn: ', count)
    return new Promise((resolve) => {
      setTimeout(() => {
        count++
        resolve(count)
      }, 150)
    })
  }
  // console.log('防抖异步函数 => 结束')
  const _fn = debounce(fn, 200, 'before')
  const data1 = await _fn()
  const data2 = await _fn()
  setTimeout(() => expect(data1).toEqual(1), 149)
  setTimeout(() => expect(data2).toEqual(1), 310)
})

test('防抖异步函数after', async () => {
  let count = 0
  const fn = async () => {
    // console.log('防抖异步函数 run fn: ', count)
    return new Promise((resolve) => {
      setTimeout(() => {
        count++
        resolve(count)
      }, 150)
    })
  }
  // console.log('防抖异步函数 => 结束')
  const _fn = debounce(fn, 200, 'after')
  const data1 = await _fn()
  const data2 = await _fn()
  expect(data1).toEqual(undefined)
  expect(data2).toEqual(undefined)
})

test('防抖异步函数超过防抖时间', async () => {
  let count = 0
  const fn = async () => {
    // console.log('防抖异步函数超过防抖时间 run fn: ', count)
    return new Promise((resolve) => {
      setTimeout(() => {
        count++
        resolve(count)
      }, 20)
    })
  }
  // console.log('防抖异步函数超过防抖时间 => 结束')
  const _fn = debounce(fn, 10, 'before')
  const data1 = await _fn()
  const data2 = await _fn()
  expect(data1).toEqual(1)
  expect(data2).toEqual(2)
})
