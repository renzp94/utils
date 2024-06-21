import { expect, test } from 'bun:test'
import { ZH_MATCH, zhValidator } from '../../src'

test('zhValidator', () => {
  expect(zhValidator('这是一段中文文字，还有中文的标点符号。')).toBeTrue()
  expect(zhValidator('这是一段中文文字', ZH_MATCH.W)).toBeTrue()
  expect(
    zhValidator('这是一段中文文字，还有中文的标点符号。', ZH_MATCH.W),
  ).toBeFalse()
  expect(zhValidator('这是一段含有英文符号的字符串.')).toBeFalse()
  expect(zhValidator('《》（）', ZH_MATCH.S)).toBeTrue()
  expect(zhValidator('这是一段中文文字，还有中文的标点符号', ZH_MATCH.S)).toBe(
    false,
  )
})
