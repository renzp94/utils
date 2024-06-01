import { expect, test } from 'bun:test'
import { radom } from '../../src'

test('生成随机数', () => {
  expect(radom(100, 10000)).toBeNumber()
  expect(radom(1, 35)).toBeGreaterThan(1)
  expect(radom(1, 35)).toBeLessThan(35)
  expect(radom(100, 10000, 0)).toBeInteger()
})
