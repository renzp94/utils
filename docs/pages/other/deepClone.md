# deepClone

深拷贝。

> 注意：由于WeakMap和WeakSet的键是弱引用，所以不能被深拷贝。

## 基本用法

传入一个值，返回复制后的值。

```ts
import { deepClone } from '@renzp/utils'

const list: any = [{ a: 1 }, { a: 2 }]
const newList = deepClone(list).map((item: any) => {
 item.b = item.a * 2
 return item
})

console.log(list); // [{ a: 1, b: 2 }, { a: 2, b: 4 }]
console.log(newList); // [{ a: 1 }, { a: 2 }]
```

## 参数

| 参数 | 说明       | 类型 | 默认值 | 是否必填 |
| ---- | ---------- | ---- | ------ | -------- |
| v    | 要复制的值 | `T`  | -      | 是       |


## 返回

| 参数 | 说明         | 类型 |
| ---- | ------------ | ---- |
| v    | 复制后的新值 | `T`  |
