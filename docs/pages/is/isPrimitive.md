# isPrimitive

是否为基础数据类型。基础数据类型有：`string`, `number`, `boolean`, `null`, `undefined`，`symbol`

## 基本用法

传入一个值，如果是基础数据类型则返回`true`，否则返回`false`。

```ts
import { isPrimitive } from '@renzp/utils'

isPrimitive(1); // true
isPrimitive('1'); // true
isPrimitive({}); // false
isPrimitive([]); // false
isPrimitive(null); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明               | 类型      |
| ---- | ------------------ | --------- |
| v    | 是否为基础数据类型 | `boolean` |
