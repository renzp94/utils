import { expect, test } from 'bun:test'
import { copyText } from '../src'

test('copyText', async () => {
  const status = await copyText('复制文本')
  expect(status).toBe(true)
  const text = await navigator.clipboard.readText()
  expect(text).toBe('复制文本')
})
