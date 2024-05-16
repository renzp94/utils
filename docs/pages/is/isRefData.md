# isRefData

是否为引用类型数据。引用类型数据有：`Object`, `Array`, `Date`, `Map`, `Set`, `WeakMap`, `WeakSet`

## 基本用法

传入一个值，如果是引用类型数据则返回`true`，否则返回`false`。

```ts
import { isRefData } from '@renzp/utils'

isRefData({}); // true
isRefData([]); // true
isRefData(''); // false
isRefData(1); // false
isRefData(true); // false
isRefData(new Date()); // true
isRefData(new Map()); // true
isRefData(new Set()); // true
isRefData(new WeakMap()); // true
isRefData(new WeakSet()); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明               | 类型      |
| ---- | ------------------ | --------- |
| v    | 是否为引用类型数据 | `boolean` |
