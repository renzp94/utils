# isFalsy

是否为假值(`false`或者可以隐式转换成`false`的值)

假值：`false`、`null`、`undefined`、`0`、`''`、`NaN`

## 基本用法

传入一个值，如果是假值则返回`true`，否则返回`false`。

```ts
import { isFalsy } from '@renzp/utils'

isFalsy(false); // true
isFalsy(1); // false
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明       | 类型      |
| ---- | ---------- | --------- |
| v    | 是否为假值 | `boolean` |
