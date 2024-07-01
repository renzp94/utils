# reverse

反转数据。

## 基本用法

传入一个值，返回反转后的值。

```ts
import { reverse } from '@renzp/utils';

reverse('Hello World!'); // '!dlroW olleH'
reverse([1, 2, false]); // [false, 2, 1]
reverse(new Set([1, 2, false])); // Set(3) {false, 2, 1}
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要反转的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明       | 类型 |
| ---- | ---------- | ---- |
| v    | 反转后的值 | `T`  |
