import dts from 'bun-plugin-dts'

const result = await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  plugins: [dts()],
})

if (result.success) {
  console.log('打包成功')
} else {
  console.log('打包失败')
  console.log(result.logs)
}
