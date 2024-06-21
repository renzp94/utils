import { expect, test } from 'bun:test'
import { isDef } from '../../src'

test('isDef', () => {
  const a = 1
  expect(isDef(a)).toBeTrue()
  let b: unknown
  expect(isDef(b)).toBeFalse()
  const c = null
  expect(isDef(c)).toBeFalse()
  const d = undefined
  expect(isDef(d)).toBeFalse()
  const e = 'null'
  expect(isDef(e)).toBeTrue()
  const f = 'undefined'
  expect(isDef(f)).toBeTrue()
  let g: number | undefined | null
  if (isDef(g)) {
    g // 自动推断类型为number
  } else {
    g // 自动推断类型为undefined | null
  }
})
