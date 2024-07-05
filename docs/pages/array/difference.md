# difference

过滤数组。

## 基本用法

传入目标数组和比较数组，使用[SameValueZero](https://262.ecma-international.org/6.0/#sec-samevaluezero)进行比较，返回目标数组不在比较数组里的数据。

如果是对象数组，可将第三个参数传入对象的key来匹配。

如果需要自定义过滤规则可将规则函数传入第三个参数。

```ts
import { difference } from '@renzp/utils';

difference([1, 2, 3], [2, 3]); // [1]
difference([1, 2, false, '1'], ['1']); // [1, 2, false]
difference(
 [{ a: 1, b: 1 },{ a: 2, b: 2 }],
 [{ a: 1 }],
 { filter: 'a' },
); // [{ a: 2, b: 2 }]
difference(
 [{ a: 0, b: 0 },{ a: 1, b: 1 },{ a: 2, b: 2 }],
 [{ a: 1 }],
 { filter: (target, v) => target.a < v.a },
); // [{ a: 1, b: 1 }, { a: 2, b: 2 }]
```

## 参数

| 参数    | 说明     | 类型               | 默认值 | 是否必填 |
| ------- | -------- | ------------------ | ------ | -------- |
| list    | 目标数组 | `Array<T>`         | -      | 是       |
| values  | 比较数组 | `Array<T>`         | -      | 是       |
| options | 配置     | `FilterOptions<T>` | -      | 否       |

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

| 参数 | 说明             | 类型       |
| ---- | ---------------- | ---------- |
| list | 返回过滤后的数组 | `Array<T>` |
