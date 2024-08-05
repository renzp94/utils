import { defineConfig } from '@nubuild/cli'

export default defineConfig({
  entrypoints: ['./src/index.ts'],
  clean: true,
  dts: true,
  naming: '[name].[ext]',
  splitting: true,
  minify: true,
  format: 'esm',
  swc: { jsc: { target: 'es2015' } },
  sourcemap: 'external',
})
