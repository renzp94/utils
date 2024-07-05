# Expand

`vscode`中的类型悬停信息类型展开(只展开一层)。

## 基本用法

传入一个类型，在`vscode`中鼠标悬停是将展开一层的类型定义。

```ts
import type { Expand } from '@renzp/utils';

interface Obj1 {
  a: string
  b: string
}
interface Obj2 {
  c: Obj1
  d: string
}
// 悬停展示
// (property) _a: Obj2
const _a: Obj2;
// 悬停展示
// (property) a: {
//  e: Obj2;
//  f: Obj1;
//  g: string;
// }
const a: Expand<Obj2>;
```
