# objectify

数组转对象。

## 基本用法

传入一个目标对象数组和其对象的key，返回转换后的对象。

```ts
import { createArray, objectify } from '@renzp/utils';

const list = createArray(3, (i) => ({
  key: `key_${i}`,
  name: `name_${i}`,
  value: `value_${i}`,
}));

objectify(list, 'key');
// {
//   key_0: {
//     key: 'key_0',
//     name: 'name_0',
//     value: 'value_0',
//   },
//   key_1: {
//     key: 'key_1',
//     name: 'name_1',
//     value: 'value_1',
//   },
//   key_2: {
//     key: 'key_2',
//     name: 'name_2',
//     value: 'value_2',
//   },
// }
```

## 自定义key

第二个参数可传入目标数组中的对象属性名，则自动将`对象.属性名`取到的值作为转换对象的属性。也可传入一个函数，函数返回值用于自定义转换对象的属性。

```ts
import { createArray, objectify } from '@renzp/utils';

const list = createArray(3, (i) => ({
  key: `key_${i}`,
  name: `name_${i}`,
  value: `value_${i}`,
}));

objectify(list, (v) => `p_${v.key}`);
// {
//   p_key_0: {
//     key: 'key_0',
//     name: 'name_0',
//     value: 'value_0',
//   },
//   p_key_1: {
//     key: 'key_1',
//     name: 'name_1',
//     value: 'value_1',
//   },
//   p_key_2: {
//     key: 'key_2',
//     name: 'name_2',
//     value: 'value_2',
//   },
// }
```

## 自定义value

第三个参数可指定转换对象的属性值，如果不传，则使用当前对象作为value。可使用目标数组中的对象属性名，则自动将`对象.属性名`取到的值作为转换对象的属性值。也可传入一个函数，函数返回值用于自定义转换对象的属性值。


```ts
import { createArray, objectify } from '@renzp/utils';

type Obj = {
  key: string
  name: string
  value: string
}

const list = createArray(3, (i) => ({
  key: `key_${i}`,
  name: `name_${i}`,
  value: `value_${i}`,
}));

objectify<Obj, keyof Obj, string>(list, 'key', 'value');
// {
//   key_0: 'value_0',
//   key_1: 'value_1',
//   key_2: 'value_2',
// }

objectify<Obj, keyof Obj, Omit<Obj, 'key'>>(list, 'key', (v) => ({ value: v.value, name: v.name }));
// {
//   key_0: {
//     name: 'name_0',
//     value: 'value_0',
//   },
//   key_1: {
//     name: 'name_1',
//     value: 'value_1',
//   },
//   key_2: {
//     name: 'name_2',
//     value: 'value_2',
//   },
// }
```

## 参数

| 参数  | 说明                                                              | 类型                                 | 默认值 | 是否必填 |
| ----- | ----------------------------------------------------------------- | ------------------------------------ | ------ | -------- |
| list  | 目标数组                                                          | `Array<T>`                           | -      | 是       |
| key   | 转换后的对象属性(可直接指定目标数组中对象的key，也可自定义函数)   | `keyof T \| ((v: T) => PropertyKey)` | -      | 是       |
| value | 转换后的对象属性值(可直接指定目标数组中对象的key，也可自定义函数) | `keyof T \| ((v: T) => V)`           | -      | 是       |

## 返回

| 参数 | 说明     | 类型                 |
| ---- | -------- | -------------------- |
| obj  | 转换对象 | `{ [P in T[K]]: V }` |
