import { expect, test } from 'bun:test'
import { isPromise } from '../../src'

test('Promise对象判断', () => {
  const b = new Promise(() => {})
  expect(isPromise(b)).toBeTrue()
})

test('Promise函数判断', () => {
  const b = () => new Promise(() => {})
  expect(isPromise(b)).toBeFalse()
  expect(isPromise(b())).toBeTrue()
})

test('async函数判断', () => {
  const a = async () => {}
  const b = async () => {
    await Promise.resolve(1)
  }
  expect(isPromise(a)).toBeTrue()
  expect(isPromise(b())).toBeTrue()
})
