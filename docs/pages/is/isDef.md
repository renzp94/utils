# isDef

是否有值(即：值不是`undefined`和`null`)。

## 基本用法

传入一个值，如果不是`undefined`和`null`则返回`true`，否则返回`false`。

```ts
import { isDef } from '@renzp/utils'

const a = 1;
isDef(a); // true
let b;
isDef(b); // false
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明     | 类型      |
| ---- | -------- | --------- |
| v    | 是否有值 | `boolean` |
