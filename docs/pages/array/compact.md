# compact

去除数组中假值。

`假值`：`false`、`null`、`undefined`、`0`、`""`、`NaN`

## 基本用法

传入一个数组，返回一个去除假值的数组。

```ts
import { compact } from '@renzp/utils'

compact([0, 1, 2, undefined, null, false, Number.NaN, '', []]); // [1, 2, []]
compact({ a: 0, b: 2, c: false }); // { a: 0, b: 2, c: false }
```

## 参数

| 参数 | 说明     | 类型       | 默认值 | 是否必填 |
| ---- | -------- | ---------- | ------ | -------- |
| list | 目标数组 | `Array<T>` | -      | 是       |

## 返回

| 参数 | 说明               | 类型       |
| ---- | ------------------ | ---------- |
| list | 返回去除假值的数组 | `Array<T>` |
