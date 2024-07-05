# ArrayElementType

获取数组中的元素类型。

## 基本用法

传入一个数组类型，数组中可能包含的类型。

```ts
import type { ArrayElementType } from '@renzp/utils';

ArrayElementType<string[]>; // string
ArrayElementType<[string,number]>; // string | number
```
