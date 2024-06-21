# isUndefined

是否为`undefined`。

## 基本用法

传入一个值，如果是`undefined`则返回`true`，否则返回`false`。

```ts
import { isUndefined } from '@renzp/utils'

const a = 1;
isUndefined(a); // false
let b;
isUndefined(b); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明              | 类型      |
| ---- | ----------------- | --------- |
| v    | 是否为`undefined` | `boolean` |
