# merge

合并对象。

## 基本用法

传入目标对象和合并对象，如果target和source都是对象，则返回合并后的对象，否则返回target。默认是深度合并，可以传入`deep: false`禁止深度合并，如果自定义合并规则，可传入`value`函数。

```ts
import { merge } from '@renzp/utils';

merge({ a: 1 }, { b: 1 }); // { a: 1, b: 1 }
merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } }); // { a: 1, b: { c: 2, d: 1 } }
merge({ a: 1, b: { c: 1, d: 1 } }, { b: { c: 2 } }, { deep: false }); // { a: 1, b: { c: 2 } }
merge(
 { a: [1], b: [2] },
 { a: [3], b: [4] },
 {
   value: (targetValue, sourceValue) => [...targetValue, ...sourceValue],
 },
); // { a: [1, 3], b: [2, 4] }
```

## 参数

| 参数    | 说明     | 类型           | 默认值 | 是否必填 |
| ------- | -------- | -------------- | ------ | -------- |
| target  | 目标对象 | `T`            | -      | 是       |
| source  | 合并对象 | `T`            | -      | 是       |
| options | 合并配置 | `MergeOptions` | -      | 否       |

```ts
export interface MergeOptions {
  deep?: boolean
  value?: (targetValue: any, sourceValue: any) => any
}
```

## 返回

| 参数 | 说明         | 类型                     |
| ---- | ------------ | ------------------------ |
| obj  | 合并后的数据 | `T   \| MergeType<T, S>` |
