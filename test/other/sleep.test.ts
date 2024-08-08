import { expect, test } from 'bun:test'
import { sleep } from '../../src'

test('sleep 1s', async () => {
  let count = 1
  const run = async () => {
    await sleep(1000)
    count++
  }
  run()
  expect(count).toBe(1)
  setTimeout(() => {
    expect(count).toBe(2)
  }, 1500)
})
