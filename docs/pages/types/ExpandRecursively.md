# ExpandRecursively

`vscode`中的类型悬停信息类型全部展开。

## 基本用法

传入一个类型，在`vscode`中鼠标悬停是将展开所有类型定义。

```ts
import type { ExpandRecursively } from '@renzp/utils'

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
//     c: {
//         a: string;
//         b: string;
//     };
//     d: string;
// }
const a: ExpandRecursively<Obj2>;
```
