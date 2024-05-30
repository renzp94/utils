import fs from 'node:fs'
import path from 'node:path'

const resolve = (dir: string) => path.resolve(__dirname, dir)

export const getSidebar = (dir: string) => {
  const dirPath = resolve(dir)
  const files = fs.readdirSync(dirPath).filter((file) => /\.md$/.test(file))
  const category = dirPath.split('/').pop()
  return files.map((file) => ({
    text: file.replace('.md', ''),
    link: `/${category}/${file}`,
  }))
}

export const getPages = async () => {
  const dirs = fs
    .readdirSync(resolve('.'))
    .filter((file) => file !== 'index.ts')

  const pages = await Promise.all(
    dirs.map(async (dir) => {
      const configPath = resolve(`./${dir}/index.ts`)
      if (fs.existsSync(configPath)) {
        const target = (await import(`./${dir}/index.ts`)).default
        if (!target.items) {
          target.items = getSidebar(`./${dir}`)
        }
        return target
      }
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log(`目录${dir}未配置侧边栏`)
    }),
  )

  const sortPages = pages
    .filter((item) => item.sort !== undefined)
    .sort((curr, next) => curr.sort - next.sort)

  const noSortPages = pages.filter((item) => item.sort === undefined)

  return [...sortPages, ...noSortPages]
}
