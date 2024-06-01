import { exists, readdir, unlink } from 'node:fs/promises'
import dts from 'bun-plugin-dts'

/**
 * 删除dist 目录
 */
export const rmDist = async () => {
  const hasDist = await exists('./dist')
  if (hasDist) {
    const distFiles = await readdir('./dist')
    const rmFiles = distFiles.map((file) => {
      return unlink(`./dist/${file}`)
    })

    return Promise.all(rmFiles)
  }
}

/**
 * 打包
 */
export const build = async () => {
  await rmDist()
  return Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    naming: '[name].[ext]',
    splitting: true,
    minify: true,
    format: 'esm',
    plugins: [dts()],
  })
}

/**
 * npm发布
 */
export const npmPublish = async () => {
  await Bun.$`bunx standard-version`
  return Bun.$`npm publish`
}

/**
 * jsr发布
 */
export const jsrPublish = async () => {
  const pkg = await Bun.file('./package.json').json()
  const hasJsrJson = await exists('./jsr.json')
  const jsr = hasJsrJson ? await Bun.file('./jsr.json').json() : {}

  if (jsr.version === pkg.version) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('无新版本发布')
    return
  }

  const jsrConfig = {
    name: pkg.name,
    version: pkg.version,
    exports: {
      '.': './src/index.ts',
    },
  }

  await Bun.write('./jsr.json', JSON.stringify(jsrConfig, null, 2))
  await Bun.$`bunx jsr publish --allow-dirty`
  await Bun.$`git add jsr.json`
  return Bun.$`git commit -m "chore(jsr:${jsrConfig.version}): published"`
}
