# chain

函数链式调用。

::: tip 注意
- 所有的函数如果有参数，则首个参数必须是处理的数据。因为chain每次调用函数后的返回值作为下一次调用函数的首个参数。
- 如果所有的函数不需要传其他的参数，则可以直接使用`chainFn[函数名]`即可，注意：`此处是变量调用，不是函数调用`。
- 链式的开始是以第一个函数调用开始，以`.value`属性为结束。结束后`.value`将会被重置。
:::

## 基本用法

传入一个对象，对象的key是函数名，value是函数，第二个参数需要传入函数首个参数，返回一个具有链式调用的代理对象。

```ts
import { chain } from '@renzp/utils';

const str = '2,5,7,20,23,24,25,29,35,36';
const toArray = (v: string) => v.split(',');
const toNumber = (list: Array<string>) => list.map(Number);
const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
const _toString = (list: Array<number>) => list.toString();
const chainFn = chain({toArray, toNumber, getEven, greet, toString: _toString }, str);
chainFn.toArray.toNumber.getEven.toString.value; // '2,20,24,36'
```

## 多参数函数

链式的调用方式是变量调用，如果有些函数还需要支持其他的参数传入，可以通过`CHAIN_FNS`属性来使用函数调用的方式。

::: tip 注意
使用`CHAIN_FNS`调用的函数，也是默认第一个参数是处理的数据且已自动传入，调用时只需要传后续的参数即可。
:::

```ts
import { chain, CHAIN_FNS } from '@renzp/utils';

const str = '2,5,7,20,23,24,25,29,35,36';
const toArray = (v: string) => v.split(',');
const toNumber = (list: Array<string>) => list.map(Number);
const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
const greet = (list: Array<number>, min: number) =>
  list.filter((v) => v > min);
const _toString = (list: Array<number>) => list.toString();
const chainFn = chain({toArray, toNumber, getEven, greet, toString: _toString }, str);
chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(10).toString.value; // '20,24,36'
chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(30).toString.value; // '36'
```

## 默认值

如果需要设置默认值，可以传入第三个参数。

```ts
import { chain, CHAIN_FNS } from '@renzp/utils';

const str = '2,5,7,20,23,24,25,29,35,36';
const toArray = (v: string) => v.split(',');
const toNumber = (list: Array<string>) => list.map(Number);
const getEven = (list: Array<number>) => list.filter((v) => v % 2 === 0);
const greet = (list: Array<number>, min: number) =>
  list.filter((v) => v > min);
const _toString = (list: Array<number>) => list.toString();
const chainFn = chain({toArray, toNumber, getEven, greet, toString: _toString }, str, '100');
chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(10).value; // [20, 24, 36]
chainFn.toArray.toNumber.getEven[CHAIN_FNS].greet(50).toString.value; // '100'
```


## 参数

| 参数         | 说明           | 类型            | 默认值 | 是否必填 |
| ------------ | -------------- | --------------- | ------ | -------- |
| fns          | 函数组成的对象 | `T`             | -      | 是       |
| data         | 要处理的数据   | `ChainData<T>`  | -      | 否       |
| defaultValue | 默认值         | `ChainValue<T>` | -      | 否       |

```ts
export type AnyFunction = (...args: any[]) => any

export type ChainData<T extends Record<string, AnyFunction>> = T extends Record<
  string,
  infer P
>
  ? P extends AnyFunction
    ? Parameters<P> extends [infer First, ...infer _]
      ? First
      : never
    : never
  : never

export type ChainValue<T extends Record<string, AnyFunction>> =
  T extends Record<string, infer P>
    ? P extends AnyFunction
      ? ReturnType<P>
      : never
    : never
```

## 返回

| 参数    | 说明           | 类型             |
| ------- | -------------- | ---------------- |
| chainFn | 链式调用的对象 | `ChainReturn<T>` |

```ts
export type AnyFunction = (...args: any[]) => any

export type ChainFns<T extends Record<string, AnyFunction>> = {
  [k in keyof T extends string ? keyof T : keyof T]: (
    ...args: Parameters<T[k]> extends undefined
      ? never
      : Parameters<T[k]> extends [infer _, ...infer Rest]
        ? Rest
        : never
  ) => ChainReturn<T>
}

export type ChainReturn<T extends Record<string, AnyFunction>> = {
  [k in keyof T extends string ? keyof T : keyof T]: ChainReturn<T>
} & {
  value?: ChainValue<T>
  [CHAIN_FNS]: ChainFns<T>
}
```