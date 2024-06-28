# Mutex

类型互斥。

## 基本用法

传入两个类型，返回合并后的类型。

```ts
import type { Mutex } from '@renzp/utils';

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
