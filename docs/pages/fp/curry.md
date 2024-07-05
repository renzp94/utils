# curry

函数柯里化。

## 基本用法

传入一个函数，返回一个柯里化后的函数。

```ts
import { curry } from '@renzp/utils';

const regValidator = (regExp: RegExp, v: string) => regExp.test(v);
curry(regValidator)(/^1[3-9]\d{9}$/, '13311111111'); // true

const createValidator = curry(regValidator);
const phoneValidator = createValidator(/^1[3-9]\d{9}$/);
phoneValidator('13311111111'); // true

const emailValidator = createValidator(/^[a-zA-Z0-9_\.\-\+]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/);
emailValidator('lisi@qq.com'); // true
```

## 参数

| 参数 | 说明             | 类型          | 默认值 | 是否必填 |
| ---- | ---------------- | ------------- | ------ | -------- |
| fn   | 需要柯里化的函数 | `AnyFunction` | -      | 是       |

## 返回

| 参数 | 说明           | 类型         |
| ---- | -------------- | ------------ |
| fn   | 柯里化后的函数 | `CurryFn<F>` |

```ts
export type AnyFunction = (...args: any[]) => any

type DiffPrefixLoose<T extends readonly any[], O extends any[]> = T extends [
  infer P1,
  ...infer R1,
]
  ? O extends [infer P2, ...infer R2]
    ? P2 extends P1
      ? DiffPrefixLoose<R1, R2>
      : T
    : T
  : T
type ArrToPrefixUnion<A extends any[]> = A extends [infer P, ...infer R]
  ? [P] | [P, ...ArrToPrefixUnion<R>]
  : []

type CurryFn<T extends AnyFunction> = <
  R extends ArrToPrefixUnion<Parameters<T>>,
>(
  ...args: R
) => DiffPrefixLoose<Parameters<T>, R> extends []
  ? ReturnType<T>
  : CurryFn<(...args: DiffPrefixLoose<Parameters<T>, R>) => ReturnType<T>>

```