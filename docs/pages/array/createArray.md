# createArray

创建数组。

## 基本用法

传入数组长度和填充元素，返回一个含有元素的数组。如果需要复杂的元素填充，第二个参数可以传入一个函数。

```ts
import { createArray } from '@renzp/utils';

createArray(2); // []
createArray(2).length; // 2
createArray(2, 0); // [0, 0]
createArray(2, (i) => i * 2); // [0, 2]
```

## 参数

| 参数   | 说明     | 类型                          | 默认值 | 是否必填 |
| ------ | -------- | ----------------------------- | ------ | -------- |
| length | 数组长度 | `number`                      | `0`    | 否       |
| value  | 填充元素 | `T \| ((index: number) => T)` | -      | 否       |

## 返回

| 参数 | 说明           | 类型       |
| ---- | -------------- | ---------- |
| list | 返回创建的数组 | `Array<T>` |
