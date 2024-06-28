# mapToObject

Map转对象。

## 基本用法

传入一个Map，返回转换后的对象。如果传入的不是Map，则返回空对象。

> 注意：如果想要ts自动推导出对象的类型，需要手动指定Map类型。

```ts
import { mapToObject } from '@renzp/utils';

mapToObject(
  new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]),
); // type: {[x: string]: number}，value: { a: 1, b: 3, c: 3 }

mapToObject(
  new Map<'a' | 'b' | 'c', number>([
   ['a', 1],
    ['b', 2],
    ['c', 3],
  ]),
); // type: { a: number; b: number; c: number }，value: { a: 1, b: 3, c: 3 }
```

## 参数

| 参数 | 说明    | 类型 | 默认值 | 是否必填 |
| ---- | ------- | ---- | ------ | -------- |
| v    | 目标Map | `T`  | -      | 是       |

## 返回

| 参数 | 说明         | 类型                       |
| ---- | ------------ | -------------------------- |
| v    | 转换后的对象 | `MapToObjectReturnType<T>` |

```ts
type UnionToIntersection<U> = (U extends U ? (arg: U) => void : never) extends (
  arg: infer T,
) => void
  ? T
  : never

export type MapToObjectReturnType<T> = UnionToIntersection<
  T extends Map<infer K, infer V>
    ? K extends keyof any
      ? { [Key in K]: V }
      : never
    : never
>
```