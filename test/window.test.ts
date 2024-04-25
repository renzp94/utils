import { expect, test } from 'bun:test'
import { copyText } from '../src'

test('copyText', async () => {
  const status = await copyText('复制文本')
  expect(status).toBe(true)
  const text = await navigator.clipboard.readText()
  expect(text).toBe('复制文本')
})

test('happydom没有document.execCommand', async () => {
  expect(document.execCommand).toBeUndefined()
  // 将navigator.clipboard.writeText方法删除以便触发document.execCommand
  // @ts-ignore
  navigator.clipboard.writeText = undefined
  const status = await copyText('复制文本1')
  expect(status).toBe(false)
})
