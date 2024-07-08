# compose

函数组合。

## 基本用法

传入多个函数，返回一个组合后的新函数。

```ts
import { compose } from '@renzp/utils';

const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
const great20 = (list: Array<number>) => list.filter((v) => v > 20);
const fn = compose(great20, getEven);
fn([2, 5, 7, 20, 23, 24, 25, 29, 35, 36]); // [24, 36]
```

## 参数

| 参数   | 说明         | 类型                    | 默认值 | 是否必填 |
| ------ | ------------ | ----------------------- | ------ | -------- |
| ...fns | 要组合的函数 | `...Array<AnyFunction>` | -      | 是       |

## 返回

| 参数 | 说明           | 类型                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| fn   | 组合后的新函数 | `(...args: LastParameters<Fns>) => FirstReturnType<Fns>` |

```ts
export type AnyFunction = (...args: any[]) => any

type FirstReturnType<Fns extends Array<AnyFunction>> = Fns extends [
  infer First,
  ...infer _,
]
  ? First extends AnyFunction
    ? ReturnType<First>
    : never
  : never

type LastParameters<Fns extends Array<AnyFunction>> = Fns extends [
  ...infer _,
  infer Last,
]
  ? Last extends AnyFunction
    ? Parameters<Last>
    : never
  : never
```