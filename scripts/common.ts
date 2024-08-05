import { exists } from 'node:fs/promises'

/**
 * 打包
 */
export const build = () => Bun.$`bun run build`

/**
 * npm发布
 */
export const npmPublish = async () => {
  const [_b, _s, releaseAs] = Bun.argv
  if (
    releaseAs &&
    !['patch', 'minor', 'major'].includes(releaseAs) &&
    !/\d\.\d\.\d/.test(releaseAs)
  ) {
    throw new Error(
      `版本号:${releaseAs}为错误的版本号，请指定'patch', 'minor', 'major', 'x.x.x'`,
    )
  }
  await Bun.$`bunx standard-version ${releaseAs ? `--release-as ${releaseAs}` : ''}`
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
  return Bun.$`git add jsr.json && git commit -m "jsr(${jsrConfig.version}): published"`
}
export interface CoverageOptions {
  label?: string
  tagConfigs?: Array<{ ratio: number; color: string }>
  outDir?: string
}
