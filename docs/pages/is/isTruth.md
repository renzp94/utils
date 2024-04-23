# isTruth

是否为真值

## 基本用法

传入一个值，如果是真值则返回`true`，否则返回`false`。

```ts
import { isTruth } from '@renzp/utils'

isTruth(false); // false
isTruth(1); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明       | 类型      |
| ---- | ---------- | --------- |
| v    | 是否为真值 | `boolean` |
