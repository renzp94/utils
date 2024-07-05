# throttle

创建节流函数。

## 基本用法

传入一个函数，返回一个节流函数，默认节流时间为`300ms`。

```ts
import { throttle } from '@renzp/utils';

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = throttle(fn);
_fn(1);
console.log(value); // 0
setTimeout(() => console.log(value), 300); // 1
```

## 设置节流时间

可传入`time`参数设置节流时间。如果传入值小于0，则表示没有节流和直接调用函数一样。如果传入0则放到下一个执行周期(即：`setTimeout(fn,0)`)。

```ts
import { throttle } from '@renzp/utils';

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = throttle(fn, 1000);
_fn(1);
console.log(value); // 0
setTimeout(() => console.log(value), 300); // 0
setTimeout(() => console.log(value), 1000); // 1
```

## 设置执行时机

默认是等待`time`时间后执行函数，如果想先执行再等待，可以设置`callTiming`为`before`。

```ts
import { throttle } from '@renzp/utils';

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = throttle(fn, 300, 'before');
_fn(1);
console.log(value); // 1
_fn(2);
setTimeout(() => console.log(value), 300); // 1
```

## 立即执行节流函数

如果想在节流时间内立即执行最后一次调用，则可以使用`fn.flush`。

```ts
import { throttle } from '@renzp/utils';

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = throttle(fn);
for (let i = 0; i < 3; i++) {
  _fn(i);
};
_fn.flush();
console.log(value); // 2
```

## 取消节流

如果取消节流，可使用`fn.cancel`。调用后如果有待执行的任务，则会立即执行，如果不需要执行，则传入`false`。取消节流是永久取消，如果想撤销取消节流的操作，可使用`fn.revokeCancel`。

```ts
import { throttle } from '@renzp/utils';

let value = 0;
const fn = (count: number) => {
  value = count;
};
const _fn = throttle(fn);
for (let i = 0; i < 3; i++) {
  _fn(i);
};
_fn.cancel();
console.log(value); // 2
// _fn.cancel(false);
// console.log(value); // 0
_fn.revokeCancel();
value = 0;
for (let i = 0; i < 3; i++) {
  _fn(i);
}
expect(value).toEqual(0);
setTimeout(() => expect(value).toEqual(2), 300);
```

## 参数

| 参数       | 说明                 | 类型                | 默认值  | 是否必填 |
| ---------- | -------------------- | ------------------- | ------- | -------- |
| fn         | 要执行的函数         | `T`                 | -       | 是       |
| time       | 节流时间(单位：`ms`) | `number`            | `300`   | 否       |
| callTiming | 执行时机             | `before` \| `after` | `after` | 否       |

## 返回

| 参数 | 说明     | 类型            |
| ---- | -------- | --------------- |
| fn   | 节流函数 | `ThrottleFn<T>` |

```ts
export type ThrottleFn<T> = T & {
  flush: () => void
  cancel: (flush?: boolean) => void
  revokeCancel: () => void
}
```

## fn属性

| 参数         | 说明                 | 类型                        |
| ------------ | -------------------- | --------------------------- |
| flush        | 立即执行最近一个任务 | `() => void`                |
| cancel       | 取消节流             | `(flush?: boolean) => void` |
| revokeCancel | 撤销取消节流         | `() => void`                |