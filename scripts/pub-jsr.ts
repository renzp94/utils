import { readdir } from 'node:fs/promises'

const pkg = await Bun.file('./package.json').json()

const getExports = async () => {
  const files = await readdir('./src')
  const exports = files
    .filter((file) => !file.includes('_'))
    .reduce((prev, file) => {
      if (file === 'index.ts') {
        return { ...prev, '.': './src/index.ts' }
      }

      return {
        ...prev,
        [`./${file.replace('.ts', '')}`]: `./src/${file}`,
      }
    }, {})

  return exports
}

const exports = await getExports()
const jsrConfig = {
  name: pkg.name,
  version: pkg.version,
  exports,
}

await Bun.write('./jsr.json', JSON.stringify(jsrConfig, null, 2))

await Bun.$`bunx jsr publish --allow-dirty`
