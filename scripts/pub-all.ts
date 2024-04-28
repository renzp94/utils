import { build, jsrPublish, npmPublish } from './common'

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log('📦 打包中...')
const result = await build()

if (result.success) {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log('📦 打包成功 🎉🎉🎉')
  await npmPublish()
  await jsrPublish()
  await Bun.$`git push origin --follow-tags`
} else {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log('📦 打包失败 🚨\n')
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(result.logs)
}
