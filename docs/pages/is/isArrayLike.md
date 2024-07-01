# isArrayLike

是否为`ArrayLike(类数组对象)`类型，即：数组或者可以转成数组的对象。

## 基本用法

传入一个值，如果是`ArrayLike`类型则返回`true`，否则返回`false`。

```ts
import { isArrayLike } from '@renzp/utils';

isArrayLike([]); // true
isArrayLike({ 1: 1, 2: 2 }); // false
isArrayLike({ 1: 1, 2: 2, length: 1 }); // true
isArrayLike(document.querySelectorAll('div')); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明                       | 类型      |
| ---- | -------------------------- | --------- |
| v    | 是否为`ArrayArrayLike`类型 | `boolean` |
