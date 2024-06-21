import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './dist',
  splitting: true,
  target: 'es6',
  minify: true,
  format: 'esm',
  sourcemap: true,
  dts: true,
  clean: true,
})
