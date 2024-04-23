# isUnDef

是否无值(即：值为`undefined`或`null`)

## 基本用法

传入一个值，如果无值则返回`true`，否则返回`false`。

```ts
import { isUnDef } from '@renzp/utils'

const a = 1;
isUnDef(a); // false
let b;
isUnDef(b); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明     | 类型      |
| ---- | -------- | --------- |
| v    | 是否无值 | `boolean` |
