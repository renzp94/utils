# debounce

创建防抖函数。

## 基本用法

传入一个函数，返回一个防抖函数，默认防抖时间为`300ms`。

```ts
import { debounce } from '@renzp/utils'
let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = debounce(fn);
for (let i = 0; i < 3; i++) {
  // time: 504
  // 100*(i=0) = 0 +
  // 100*(i=1) = 100 +
  // 100*(i=2) - 100*(i=1) = 100 +
  // 防抖间隔 = 300 +
  // 容错时间(setTimeout存在大概4ms误差) = 4
  setTimeout(() => {
    _fn(i);
  }, 100 * i);
};
setTimeout(() => console.log(value), 299); // 0
setTimeout(() => console.log(value), 300); // 0
setTimeout(() => console.log(value), 504); // 2
```

## 设置防抖时间

可传入`time`参数设置防抖时间。如果传入值小于0，则表示没有防抖和直接调用函数一样。如果传入0则放到下一个执行周期(即：`setTimeout(fn,0)`)

```ts
import { debounce } from '@renzp/utils'

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = debounce(fn, 0);
for (let i = 0; i < 3; i++) {
  _fn(i);
};
console.log(value); // 0
setTimeout(() => console.log(value), 1); // 2
```

## 设置执行时机

默认是`time`时间内没有触发函数则执行，如果想先执行再等待，可以设置`callTiming`为`before`。

```ts
import { debounce } from '@renzp/utils'

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = debounce(fn, 300, 'before');
_fn(1);
console.log(value); // 1
_fn(2);
setTimeout(() => console.log(value), 600); // 1
```

## 立即执行防抖函数

如果想在防抖时间内立即执行最后一次调用，则可以使用`fn.flush`。

```ts
import { debounce } from '@renzp/utils'

let value = 0;
const fn = (count: number) => {
  value = count
};
const _fn = debounce(fn, 1000);
for (let i = 0; i < 3; i++) {
  _fn(i);
};
_fn.flush();
console.log(value); // 2
```

## 取消防抖

如果取消防抖，可使用`fn.cancel`。调用后如果有待执行的任务，则会立即执行，如果不需要执行，则传入`false`。取消防抖是永久取消，如果想撤销取消防抖的操作，可使用`fn.revokeCancel`。

```ts
import { debounce } from '@renzp/utils'

let value = 0;
const fn = (count: number) => {
  value = count
};
const _fn = debounce(fn);
_fn.cancel();
for (let i = 0; i < 3; i++) {
  _fn(i);
}
console.log(value); // 2
// _fn.cancel(false);
// console.log(value); // 0
_fn.revokeCancel();
value = 0;
for (let i = 0; i < 3; i++) {
  _fn(i);
}
console.log(value); // 0
setTimeout(() => console.log(value), 300); // 2
```

## 参数

| 参数       | 说明                 | 类型                | 默认值  | 是否必填 |
| ---------- | -------------------- | ------------------- | ------- | -------- |
| fn         | 要执行的函数         | `T`                 | -       | 是       |
| time       | 防抖时间(单位：`ms`) | `number`            | `300`   | 否       |
| callTiming | 执行时机             | `before` \| `after` | `after` | 否       |

## 返回

| 参数 | 说明     | 类型            |
| ---- | -------- | --------------- |
| fn   | 防抖函数 | `DebounceFn<T>` |

```ts
export type DebounceFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
}
```

## fn属性

| 参数         | 说明                 | 类型                        |
| ------------ | -------------------- | --------------------------- |
| flush        | 立即执行最近一个任务 | `() => void`                |
| cancel       | 取消防抖             | `(flush?: boolean) => void` |
| revokeCancel | 撤销取消防抖         | `() => void`                |