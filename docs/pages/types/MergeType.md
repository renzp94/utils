# MergeType

类型合并。

## 基本用法

传入两个类型，返回合并后的类型。

```ts
import { MergeType } from '@renzp/utils'


interface Obj1 {
  a: number
}
interface Obj2 {
  a: string
  b: number
}
export type Obj = MergeType<Obj1, Obj2>
const a: Obj = { a: '1', b: 1 }
```
