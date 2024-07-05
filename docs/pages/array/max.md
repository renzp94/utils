# max

获取数组或Set中的最大值。

## 基本用法

传入一个数组，如果找到则返回最大值否则返回`undefined`。

::: tip 注意
- 此方法仅支持比较值为`number`或`string`类型的数据
- 如果有`number`类型则优先转换成`number`类型进行比较，如果转换失败则转为`string`类型比较。
- `string`类型比较：字符串长度大的大，如果长度一样，则使用`localeCompare`比较，靠后的大。
- 综上所述：`最好比较的值是一种类型。`
:::

```ts
import { max } from '@renzp/utils';

max([1, 2, 3, 4]); // 4
const list = [
  { name: '张三', age: 12 },
  { name: '李四', age: 20 },
  { name: '王小五', age: 18 },
];
max(list, 'age'); // { name: '李四', age: 20 }
max(list, (v) => v.name); // { name: '王小五', age: 18 }
```

## 参数

| 参数   | 说明              | 类型                       | 默认值 | 是否必填 |
| ------ | ----------------- | -------------------------- | ------ | -------- |
| list   | 目标数组          | `Array<T> \| Set<T>`       | -      | 是       |
| filter | 对象key或过滤函数 | `keyof T \| ((v: T) => T)` | -      | 否       |

## 返回

| 参数 | 说明                             | 类型             |
| ---- | -------------------------------- | ---------------- |
| v    | 数组或Set中的最大值或`undefined` | `T \| undefined` |
