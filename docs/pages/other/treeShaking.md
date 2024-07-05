# treeShaking

数据树摇。即：从数据中移除一部分数据。

> 注意：此方法仅支持对象，数组，Set，Map。

## 基本用法

传入一个数据，返回一个数组：`[删除后的数据，删除的数据]`。

```ts
import { treeShaking } from '@renzp/utils';

treeShaking([1, '2', 3, 4, 5], { indexes: [0, 2] }); // [['2', 4, 5], [1, 3]]
treeShaking([1, '2', 3, 4, 5], { start: 2, end: 4 }); // [[1, '2'], [3, 4, 5]]
treeShaking({ a: 1, b: 2, c: 3 }, { keys: ['a'] }; // [{ b: 2, c: 3 }, { a: 1 }]
```

## 数组和Set

数组和`Set`类型的数据，可以通过设置`options.indexes`使用下标树摇，或者设置`options.start`、`options.end`使用范围树摇。

## 对象和Map

对象和`Map`类型的数据，可通过设置`options.keys`使用属性树摇。

## 自定义树摇

如果都不满足的话，可以通过`filter`自定义树摇规则，`filter`返回`true`则表示要树摇掉的数据。

## 参数

| 参数    | 说明         | 类型                    | 默认值 | 是否必填 |
| ------- | ------------ | ----------------------- | ------ | -------- |
| v       | 要树摇的数据 | `T`                     | -      | 是       |
| options | 配置         | `TreeShakingOptions<T>` | -      | 是       |

```ts
export type TreeShakingArrayOptions = {
  indexes: Array<number>
  start?: number
  end?: number
}

export type TreeShakingArrayMutexOptions = Mutex<
  Pick<TreeShakingArrayOptions, 'indexes'>,
  Omit<TreeShakingArrayOptions, 'indexes'>
>

export type TreeShakingOptions<T> = Mutex<
  T extends Array<any>
    ? TreeShakingArrayMutexOptions
    : T extends Set<any>
      ? TreeShakingArrayMutexOptions
      : T extends Map<infer K, any>
        ? {
            keys: Array<K>
          }
        : {
            keys: Array<keyof T>
          },
  { filter?: (v: any) => boolean }
>
```

### options

#### 公共options

| 参数   | 说明       | 类型                  | 默认值 | 是否必填 |
| ------ | ---------- | --------------------- | ------ | -------- |
| filter | 自定义规则 | `(v: any) => boolean` | -      | 否       |

#### 数组/Set独有options

| 参数    | 说明                          | 类型            | 默认值 | 是否必填 |
| ------- | ----------------------------- | --------------- | ------ | -------- |
| indexes | 下标数组, 与start/end互斥     | `Array<number>` | -      | 否       |
| start   | 开始位置(包含), 与indexes互斥 | `number`        | -      | 否       |
| end     | 结束位置(包含), 与indexes互斥 | `number`        | -      | 否       |

#### 对象/Map独有options

| 参数 | 说明     | 类型             | 默认值 | 是否必填 |
| ---- | -------- | ---------------- | ------ | -------- |
| keys | 属性数组 | `Array<keyof T>` | -      | 否       |


## 返回

| 参数        | 说明                       | 类型                   |
| ----------- | -------------------------- | ---------------------- |
| [v,removeV] | [删除后的数据，删除的数据] | `TreeShakingReturn<T>` |

```ts
export type TreeShakingReturn<T> = T extends Array<any>
  ? [Array<ArrayElementType<T>>, Array<ArrayElementType<T>>]
  : [Partial<T>, Partial<T>]
```