# Mutex

合并类型且合并的类型互斥。即：如`type Value = Mutex<{a:number},{b:number}>`，合并后的类型`Value`可以包含`a`或`b`，但不能同时包含。

## 基本用法

传入两个类型，返回合并后的类型。

```ts
import type { Mutex } from '@renzp/utils';

// 指定属性时仅可以指定index或者{start,end}，不能同时制定index和{start,end}
export type RemoveOptions = Mutex<
  {
    index: number
  },
  {
    start?: number
    end?: number
  }
>
const remove = <T>(list: Array<T>, options: RemoveOptions) => {
  console.log(list, options);
};

remove([1, 2, 3], { index: 1 }); // pass
remove([1, 2, 3], { start: 1, end: 2 }); // pass
remove([1, 2, 3], { index: 1, start: 1, end: 2 }); // ts error
```
