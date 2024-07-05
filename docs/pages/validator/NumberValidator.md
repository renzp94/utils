# numberValidator

数字验证。支持：`负数`，`科学计数法`。

## 基本用法

传入一个字符串，如果是纯数字则返回`true`，否则返回`false`。

```ts
import { numberValidator } from '@renzp/utils';

numberValidator('1'); // true
numberValidator('1.1'); // true
numberValidator('1.1.1'); // false
numberValidator('.1'); // false
numberValidator('1.'); // false
numberValidator('-1'); // true
numberValidator('12e2'); // true
```

## 参数

| 参数 | 说明         | 类型     | 默认值 | 是否必填 |
| ---- | ------------ | -------- | ------ | -------- |
| v    | 验证的字符串 | `string` | -      | 是       |


## 返回

| 参数 | 说明         | 类型      |
| ---- | ------------ | --------- |
| v    | 是否为纯数字 | `boolean` |
