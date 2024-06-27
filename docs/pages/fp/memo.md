# memo

函数缓存。

## 基本用法

传入一个函数，返回一个带缓存的新函数。

```ts
import { memo } from '@renzp/utils';

let runCount = 0;
const add = (a: number, b: number) => {
  runCount++;
  return a + b;
};
const addMemo = memo(add);
addMemo(1, 1);
addMemo(1, 1);
addMemo(2, 2);
console.log(runCount); // 2
```

## 自定义缓存key

默认是将函数的参数数组通过`JSON.stringify`转换作为key，如果此方式不能满足缓存key的话，可以通过`options.key`函数来设置缓存key。

```ts
import { memo } from '@renzp/utils';

let runCount = 0;
const add = (a: number, b: number) => {
  runCount++;
  return a + b;
}
const addMemo = memo(add, { key: (a) => a });
addMemo(1, 1);
addMemo(1, 2);
addMemo(1, 3);
console.log(runCount); // 1
```

## 设置最大缓存量

默认最大缓存10个数据，如果想增加，可以通过`options.max`设置。

> 注意：max小于1的时候无效。

```ts
import { memo } from '@renzp/utils';

let runCount = 0;
const add = (a: number, b: number) => {
  runCount++;
  return a + b;
};
const addMemo = memo(add, { max: 3 });
// +1
addMemo(1, 1);
addMemo(1, 1);
// +1
addMemo(2, 2);
addMemo(2, 2);
// +1
addMemo(3, 3);
addMemo(3, 3);
console.log(runCount); // 3
// +1
addMemo(4, 4);
// +1
addMemo(1, 1);
addMemo(1, 1);
addMemo(1, 1);
console.log(runCount); // 5
```

## 其他操作

同时缓存函数还携带了工具函数：

- `clear()`：清空缓存
- `remove(key: any)`：删除指定缓存。`注意：默认key是参数数组。`
- `set`：设置缓存。`注意：默认key是参数数组。`

```ts
import { memo } from '@renzp/utils';

let runCount = 0;
const add = (a: number, b: number) => {
  runCount++;
  return a + b;
};

const addMemo = memo(add);

let count = addMemo(1,1);
count = addMemo(1,1);
console.log(count); // 2
console.log(runCount); // 1
addMemo.remove([1, 1]);
count = addMemo(1,1);
console.log(runCount); // 2

count = addMemo(2,2);
count = addMemo(3,3);
count = addMemo(3,3);
console.log(runCount); // 4
addMemo.clear();
count = addMemo(1,1);
count = addMemo(2,2);
count = addMemo(3,3);
console.log(runCount); // 7

count = addMemo(1,1);
console.log(count); // 2
addMemo.set([1, 1],10);
count = addMemo(1,1);
console.log(count); // 10
console.log(runCount); // 7
```

## 参数

| 参数    | 说明         | 类型             | 默认值 | 是否必填 |
| ------- | ------------ | ---------------- | ------ | -------- |
| fn      | 要组合的函数 | `T`              | -      | 是       |
| options | 配置         | `MemoOptions<T>` | -      | 否       |

### options

| 参数 | 说明          | 类型                              | 默认值 | 是否必填 |
| ---- | ------------- | --------------------------------- | ------ | -------- |
| key  | 自定义缓存key | `(...args: Parameters<T>) => any` | -      | 否       |
| max  | 最大缓存数量  | `number`                          | `10`   | 否       |


## 返回

| 参数 | 说明         | 类型                |
| ---- | ------------ | ------------------- |
| fn   | 带缓存的函数 | `MemoReturnType<T>` |

```ts
export type AnyFunction = (...args: any[]) => any

export type MemoReturnType<T extends AnyFunction> = ((
  ...args: Parameters<T>
) => ReturnType<T>) & {
  clear: () => void
  remove: (key: any) => void
  set: (key: any, data: ReturnType<T>) => void
}
```