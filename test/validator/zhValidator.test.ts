import { expect, test } from 'bun:test'
import { ZH_MATCH, zhValidator } from '../../src'

test('zhValidator', () => {
  expect(zhValidator('这是一段中文文字，还有中文的标点符号。')).toBe(true)
  expect(zhValidator('这是一段中文文字', ZH_MATCH.W)).toBe(true)
  expect(
    zhValidator('这是一段中文文字，还有中文的标点符号。', ZH_MATCH.W),
  ).toBe(false)
  expect(zhValidator('这是一段含有英文符号的字符串.')).toBe(false)
  expect(zhValidator('《》（）', ZH_MATCH.S)).toBe(true)
  expect(zhValidator('这是一段中文文字，还有中文的标点符号', ZH_MATCH.S)).toBe(
    false,
  )
})
