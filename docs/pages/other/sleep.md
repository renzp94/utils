# sleep

休眠。

## 基本用法

传入一个等待时间，异步等待时间结束，结束后继续执行后续代码。

```ts
import { sleep } from '@renzp/utils';

console.log('start');
await sleep(2000); // 等待2000毫秒
console.log('end');
```

## 参数

| 参数 | 说明     | 类型     | 默认值 | 是否必填 |
| ---- | -------- | -------- | ------ | -------- |
| time | 等待时间 | `number` | -      | 是       |
