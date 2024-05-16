<p align="center"><a href="https://github.com/renzp94/utils" target="_blank" rel="noopener noreferrer"><img width="200" src="./logo.png" alt="@renzp/utils logo"></a></p>
<p align="center">
  <a href="https://bundlephobia.com/package/@renzp/utils">
    <img src="https://img.shields.io/bundlephobia/minzip/@renzp/utils?label=minzipped" alt="Bundle Size">
  </a>
  <a href="https://npmcharts.com/compare/@renzp/utils?minimal=true"><img src="https://img.shields.io/npm/dm/@renzp/utils.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@renzp/utils"><img src="https://img.shields.io/npm/v/@renzp/utils.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@renzp/utils"><img src="https://img.shields.io/npm/l/@renzp/utils.svg?sanitize=true" alt="License"></a>
  <a href="https://www.jsdocs.io/package/@renzp/utils"><img src="https://img.shields.io/badge/JSDoc-blue" alt="docs"></a>
  <a href="https://github.com/renzp94/utils/blob/main/CHANGELOG.md"><img src="https://img.shields.io/badge/更新日志-gray" alt="Change Log"></a>
</p>


# @renzp/utils

一款零依赖、实用的Javascript/Typescript工具库

## coverage

> 由于使用的`bun test`无法生成`coverage`HTML文件，所以在此列一下`coverage`

| File             | % Funcs | % Lines |
| ---------------- | ------- | ------- |
| All files        | 100.00  | 97.90   |
| src/_base.ts     | 100.00  | 100.00  |
| src/array.ts     | 100.00  | 96.43   |
| src/index.ts     | 100.00  | 100.00  |
| src/is.ts        | 100.00  | 100.00  |
| src/number.ts    | 100.00  | 93.75   |
| src/object.ts    | 100.00  | 90.91   |
| src/validator.ts | 100.00  | 100.00  |
| src/window.ts    | 100.00  | 100.00  |
| test/happydom.ts | 100.00  | 100.00  |

## 安装

```sh
npm install @renzp/utils
```

## 使用

```ts
import { isNumber } from '@renzp/utils'

const v: unknown = Math.PI
if (isNumber(v)) {
  console.log(v.toFixed(2)) // 3.14
}
```
更多使用方法可以查看[文档](https://renzp-utils.deno.dev/)
