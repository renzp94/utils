# MergeType

对象类型合并。

## 基本用法

传入两个类型，返回合并后的类型。

```ts
import type { MergeType } from '@renzp/utils'

MergeType<
  {
    a: number
    b: { c: number }
  },
  {
    a: string
    b: number
  }
>; // { a: number | string; b: number | { c: number } }
MergeType<
  {
    a: number
    b: { c: number }
  },
  {
    a: string
    b: { d: number }
  }
>; // { a: number | string; b: { c: number; d: number } }
```
