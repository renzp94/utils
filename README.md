<p align="center"><a href="https://github.com/renzp94/utils" target="_blank" rel="noopener noreferrer"><img width="200" src="./logo.png" alt="@renzp/utils logo"></a></p>
<p align="center">
  <a href="https://bundlephobia.com/package/@renzp/utils">
    <img src="https://img.shields.io/bundlephobia/minzip/@renzp/utils?label=minzipped" alt="Bundle Size">
  </a>
  <a href="https://npmcharts.com/compare/@renzp/utils?minimal=true"><img src="https://img.shields.io/npm/dm/@renzp/utils.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@renzp/utils"><img src="https://img.shields.io/npm/v/@renzp/utils.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@renzp/utils"><img src="https://img.shields.io/npm/l/@renzp/utils.svg?sanitize=true" alt="License"></a>
  <a href="https://github.com/renzp94/utils/blob/main/CHANGELOG.md"><img src="https://img.shields.io/badge/更新日志-gray" alt="Change Log"></a>
</p>


# @renzp/utils

一款零依赖、实用的Javascript/Typescript工具库

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
<a href="https://www.jsdocs.io/package/@renzp/utils"><img src="https://img.shields.io/badge/JSDoc-使用文档-blue" alt="docs" height="28"></a>
