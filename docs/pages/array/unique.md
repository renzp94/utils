# unique

数组去重。

## 基本用法

传入一个数组，使用[SameValueZero](https://262.ecma-international.org/6.0/#sec-samevaluezero)进行比较，返回去重后的数组。如果是对象数组，可以使用第二个参数指定对象的key，也可传入函数进行自定义对比。

```ts
import { unique } from '@renzp/utils'

unique([1, 1, 2, 3, 4, 3]); // [1, 2, 3, 4]
unique(
 [
   { a: 1, b: 1 },
   { a: 2, b: 1 },
   { a: 3, b: 1 },
   { a: 1, b: 1 },
 ],
 { filter: 'a' }
); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
unique(
  [
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 },
    { a: 1, b: 1 },
  ],
  { filter: (target, v) => target.a === v.a && target.b === v.b },
); // [{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 1 }]
```

## 参数

| 参数    | 说明         | 类型               | 默认值 | 是否必填 |
| ------- | ------------ | ------------------ | ------ | -------- |
| list    | 要去重的数组 | `Array<T>`         | -      | 是       |
| options | 配置         | `FilterOptions<T>` | -      | 否       |

### options

| 参数   | 说明          | 类型        | 默认值 | 是否必填 |
| ------ | ------------- | ----------- | ------ | -------- |
| filter | 过滤key或函数 | `Filter<T>` | -      | 否       |

```ts
export type Filter<T> =
  | keyof T
  | Array<keyof T>
  | ((target: T, v: T) => boolean)
```

## 返回

| 参数 | 说明         | 类型       |
| ---- | ------------ | ---------- |
| list | 去重后的数组 | `Array<T>` |
