# sort

数组排序。

## 基本用法

传入一个数组，返回排序之后的数组(默认升序)。

```ts
import { sort } from '@renzp/utils';

sort([1, 7, 4, 9, 3]); // [1, 3, 4, 7, 9]
sort([1, 7, 4, 9, 3], { desc: true }); // [9, 7, 4, 3, 1]
```

## 比较字符串

在比较字符串时使用的是[localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)方法进行比较的。

```ts
import { sort } from '@renzp/utils';

sort(['a', 't', 'A', 'c', 'y', 'w']); // ['a', 'A', 'c', 't', 'w', 'y']
```

## 对象数组

当数组元素为对象时，可使用`options.filter`根据对象的属性来比较。

```ts
import { sort } from '@renzp/utils';

sort(
  [
    {
      name: 'a',
      age: 12,
    },
    {
      name: 'b',
      age: 10,
    },
    {
      name: 'c',
      age: 18,
    },
    {
      name: 'd',
      age: 16,
    },
  ],
  { filter: 'age' },
); // [{ name: 'b', age: 10 },{ name: 'a', age: 12 },{ name: 'd', age: 16 },{ name: 'c', age: 18 }]
```

## 自定义函数

如果当指定对象key无法满足需求时，可以传给`options.filter`一个函数，函数将直接传入到`sort`中进行排序。

```ts
import { sort } from '@renzp/utils';

sort(
  [
    {
      name: 'a',
      age: 12,
    },
    {
      name: 'b',
      age: 10,
    },
    {
      name: 'c',
      age: 18,
      noSort: true,
    },
    {
      name: 'd',
      age: 19,
    },
    {
      name: 'e',
      age: 16,
    },
  ],
  {
    filter: (a, b) => {
      if (b.noSort) {
        return 0
      
      return a.age - b.age
    },
  },
); // [{ name: 'b', age: 10 },{ name: 'a', age: 12 },{ name: 'c', age: 18, noSort: true },{ name: 'e', age: 16 },{ name: 'd', age: 19 }]
```

## 参数

| 参数    | 说明         | 类型             | 默认值 | 是否必填 |
| ------- | ------------ | ---------------- | ------ | -------- |
| list    | 要排序的数组 | `Array<T>`       | -      | 是       |
| options | 配置         | `SortOptions<T>` | -      | 否       |

### options

| 参数   | 说明          | 类型            | 默认值 | 是否必填 |
| ------ | ------------- | --------------- | ------ | -------- |
| filter | 过滤key或函数 | `SortFilter<T>` | -      | 否       |
| desc   | 是否降序      | `boolean`       | -      | 否       |

```ts
export type SortFilter<T> = keyof T | ((target: T, v: T) => number)
```

## 返回

| 参数 | 说明           | 类型       |
| ---- | -------------- | ---------- |
| list | 排序之后的数组 | `Array<T>` |
