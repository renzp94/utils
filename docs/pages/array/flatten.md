# flatten

扁平化数组。默认深度扁平化，如果不需要全部深度扁平化，可通过`depth`来指定要扁平化的深度。如果需要扁平化对象数组，如树结构的数据可以指定`deepKey`属性来指定根据`deepKey`属性来扁平化。

> 注意：`depth`小于等于`0`时将不进行扁平化操作

## 基本用法

传入一个数组，返回扁平化后的数组。

```ts
import { flatten } from '@renzp/utils'

flatten([[1], 2, [3]]); // [1, 2, 3]
flatten([[1, 2], 3, [4, [5]]]); // [1, 2, 3, 4, 5]
flatten([[1, 2], 3, [4, [5]]], { depth: 1 }); // [1, 2, 3, 4, [5]]
const a = flatten(
   [
     {
       label: '1-1',
       value: '1-1',
       children: [
         {
           label: '2-1',
           value: '2-1',
           children: [{ label: '3-1', value: '3-1' }],
         },
         { label: '2-2', value: '2-2' },
       ],
     },
     { label: '1-2', value: '1-2' },
   ],
   { deepKey: 'children' },
 );
console.log(JSON.stringify(a)); // [{"label":"1-1","value":"1-1"},{"label":"2-1","value":"2-1"},{"label":"3-1","value":"3-1"},{"label":"2-2","value":"2-2"},{"label":"1-2","value":"1-2"}]
```

## 参数

| 参数    | 说明         | 类型             | 默认值 | 是否必填 |
| ------- | ------------ | ---------------- | ------ | -------- |
| list    | 要处理的数组 | `Array<T>`       | -      | 是       |
| options | 配置         | `FlattenOptions` | -      | 否       |

### options

| 参数    | 说明                     | 类型                       | 默认值 | 是否必填 |
| ------- | ------------------------ | -------------------------- | ------ | -------- |
| depth   | 扁平化的深度, 最小为`1`  | `Number.POSITIVE_INFINITY` | -      | 否       |
| deepKey | 扁平化对象数组的对象属性 | `string`                   | -      | 否       |


## 返回

| 参数 | 说明           | 类型       |
| ---- | -------------- | ---------- |
| list | 扁平化后的数组 | `Array<T>` |
