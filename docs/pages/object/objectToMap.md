# objectToMap

对象转Map。

## 基本用法

传入一个对象，返回转换后的Map。如果传入的不是对象，则返回空Map。

```ts
import { objectToMap } from '@renzp/utils';

objectToMap({ a: 1, b: '2', c: false }); // Map(3) {'a' => 1, 'b' => '2', 'c' => false}
```

## 参数

| 参数 | 说明     | 类型 | 默认值 | 是否必填 |
| ---- | -------- | ---- | ------ | -------- |
| v    | 目标对象 | `T`  | -      | 是       |


## 返回

| 参数 | 说明        | 类型                       |
| ---- | ----------- | -------------------------- |
| v    | 转换后的Map | `Map<keyof T, T[keyof T]>` |
