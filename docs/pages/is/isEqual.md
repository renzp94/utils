# isEqual

是否相等。

## 基本用法

传入两个数据，使用[SameValueZero](https://262.ecma-international.org/6.0/#sec-samevaluezero)进行比较，如果相等返回`true`，否则返回`false`。

> 注意：Symbol尽量使用字符串作为key，此方法比较会通过`toString`获取`Symbol([key])`字符串中的`[key]`，如果`key`相等，则Symbol就相等

```ts
import { isEqual } from '@renzp/utils'

isEqual(0, 0); // true
isEqual({ a: 1 }, { a: 1 }); // true
isEqual([1, 2, 3, '4'], [1, 2, 3, 4]); // false
isEqual(
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
    c: 3,
  },
  ['a', 'b'],
); // true
```

## 参数

| 参数   | 说明     | 类型                                        | 默认值 | 是否必填 |
| ------ | -------- | ------------------------------------------- | ------ | -------- |
| target | 目标数据 | `T \| Array<T> \| Map<string, T> \| Set<T>` | -      | 是       |
| value  | 比较数据 | `U \| Array<U> \| Map<string, U> \| Set<U>` | -      | 是       |
| filter | 匹配规则 | `IsEqualFilter<T, U>`                       | -      | 否       |

```ts
export type IsEqualFilter<T, U> =
  | keyof T
  | keyof U
  | Array<keyof T>
  | Array<keyof U>
  | ((target: any, v: any) => boolean)
```

## 返回

| 参数 | 说明     | 类型      |
| ---- | -------- | --------- |
| v    | 是否相等 | `boolean` |
