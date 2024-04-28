import { exists, readdir, unlink } from 'node:fs/promises'
import dts from 'bun-plugin-dts'

const rmDist = async () => {
  const hasDist = await exists('./dist')
  if (hasDist) {
    const distFiles = await readdir('./dist')
    const rmFiles = distFiles.map((file) => {
      return unlink(`./dist/${file}`)
    })

    await Promise.all(rmFiles)
  }
}

export const getEntrypoints = async () => {
  const files = await readdir('./src')
  const entrypoints = files
    .filter((file) => !file.includes('_'))
    .map((file) => `./src/${file}`)

  return entrypoints
}

const runBuild = async () => {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log('📦 打包中...')
  await rmDist()
  const entrypoints = await getEntrypoints()
  const result = await Bun.build({
    entrypoints,
    outdir: './dist',
    naming: '[name].[ext]',
    splitting: true,
    minify: true,
    format: 'esm',
    plugins: [dts()],
  })

  if (result.success) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('📦 打包成功 🎉🎉🎉')
  } else {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('📦 打包失败 🚨\n')
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(result.logs)
  }
}

runBuild()
