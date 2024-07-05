# isEmpty

是否为空。

- null/undefined/symbol/function类型一定返回true。
- 如果是数字，则不为NaN就返回true。
- 如果是时间，时间戳则不为NaN就返回true。
- 不支持WeakMap和WeakSet类型。
- 对象有key则返回true。
- 其他的就直接判断length属性，如果未定义则返回true，否则比较是否大于0。

## 基本用法

传入一个值，如果为空则返回`true`，否则返回`false`。

```ts
import { isEmpty } from '@renzp/utils';

isEmpty(null); // true
isEmpty(0); // false
isEmpty(Number.NaN); // true
isEmpty({}); // true
isEmpty([]); // true
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要判断的值 | `T`  | -      | 是       |

## 返回

| 参数 | 说明     | 类型      |
| ---- | -------- | --------- |
| v    | 是否为空 | `boolean` |
