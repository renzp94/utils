import { expect, test } from 'bun:test'
import { isDef } from '../../src'

test('isDef', () => {
  const a = 1
  expect(isDef(a)).toBe(true)
  let b: unknown
  expect(isDef(b)).toBe(false)
  const c = null
  expect(isDef(c)).toBe(false)
  const d = undefined
  expect(isDef(d)).toBe(false)
  const e = 'null'
  expect(isDef(e)).toBe(true)
  const f = 'undefined'
  expect(isDef(f)).toBe(true)
  let g: number | undefined | null
  if (isDef(g)) {
    g // 自动推断类型为number
  } else {
    g // 自动推断类型为undefined | null
  }
})
