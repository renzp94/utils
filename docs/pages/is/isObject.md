# isObject

是否为`Object`类型

## 基本用法

传入一个值，如果是`Object`类型则返回`true`，否则返回`false`。

```ts
import { isObject } from '@renzp/utils'

isObject({}); // true
isObject(1); // false
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明               | 类型      |
| ---- | ------------------ | --------- |
| v    | 是否为`Object`类型 | `boolean` |
