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

| File                             | % Funcs | % Lines |
| -------------------------------- | ------- | ------- |
| All files                        | 100.00  | 100.00  |
| src/_base.ts                     | 100.00  | 100.00  |
| src/array/createArray.ts         | 100.00  | 100.00  |
| src/array/difference.ts          | 100.00  | 100.00  |
| src/array/first.ts               | 100.00  | 100.00  |
| src/array/flatten.ts             | 100.00  | 100.00  |
| src/array/index.ts               | 100.00  | 100.00  |
| src/array/last.ts                | 100.00  | 100.00  |
| src/array/unique.ts              | 100.00  | 100.00  |
| src/index.ts                     | 100.00  | 100.00  |
| src/is/index.ts                  | 100.00  | 100.00  |
| src/is/isArray.ts                | 100.00  | 100.00  |
| src/is/isBigint.ts               | 100.00  | 100.00  |
| src/is/isBoolean.ts              | 100.00  | 100.00  |
| src/is/isDate.ts                 | 100.00  | 100.00  |
| src/is/isDef.ts                  | 100.00  | 100.00  |
| src/is/isFalsy.ts                | 100.00  | 100.00  |
| src/is/isFunction.ts             | 100.00  | 100.00  |
| src/is/isJson.ts                 | 100.00  | 100.00  |
| src/is/isMap.ts                  | 100.00  | 100.00  |
| src/is/isNull.ts                 | 100.00  | 100.00  |
| src/is/isNumber.ts               | 100.00  | 100.00  |
| src/is/isObject.ts               | 100.00  | 100.00  |
| src/is/isPrimitive.ts            | 100.00  | 100.00  |
| src/is/isRefData.ts              | 100.00  | 100.00  |
| src/is/isRegExp.ts               | 100.00  | 100.00  |
| src/is/isSet.ts                  | 100.00  | 100.00  |
| src/is/isString.ts               | 100.00  | 100.00  |
| src/is/isSymbol.ts               | 100.00  | 100.00  |
| src/is/isTruth.ts                | 100.00  | 100.00  |
| src/is/isUnDef.ts                | 100.00  | 100.00  |
| src/is/isUndefined.ts            | 100.00  | 100.00  |
| src/is/isWeakMap.ts              | 100.00  | 100.00  |
| src/is/isWeakSet.ts              | 100.00  | 100.00  |
| src/number/index.ts              | 100.00  | 100.00  |
| src/number/numberSeparate.ts     | 100.00  | 100.00  |
| src/object/index.ts              | 100.00  | 100.00  |
| src/object/removeKey.ts          | 100.00  | 100.00  |
| src/other/deepClone.ts           | 100.00  | 100.00  |
| src/other/index.ts               | 100.00  | 100.00  |
| src/other/radom.ts               | 100.00  | 100.00  |
| src/other/uuid.ts                | 100.00  | 100.00  |
| src/validator/emailValidator.ts  | 100.00  | 100.00  |
| src/validator/idCardValidator.ts | 100.00  | 100.00  |
| src/validator/index.ts           | 100.00  | 100.00  |
| src/validator/numberValidator.ts | 100.00  | 100.00  |
| src/validator/phoneValidator.ts  | 100.00  | 100.00  |
| src/validator/telValidator.ts    | 100.00  | 100.00  |
| src/validator/zhValidator.ts     | 100.00  | 100.00  |
| src/window/copyText.ts           | 100.00  | 100.00  |
| src/window/index.ts              | 100.00  | 100.00  |
| test/happydom.ts                 | 100.00  | 100.00  |

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
