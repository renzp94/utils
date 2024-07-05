# numberSeparate

分割数字。默认为`3位一分割(千分位分割)`，分割符为`,`。可通过`digit`属性设置分割的位数，可通过`separate`设置分割符。默认是不处理小数部分的，如果需要处理则设置`isDealDecimal`属性为`true`。

## 基本用法

传入一个数字，返回分割后的数字字符串。

```ts
import { numberSeparate } from '@renzp/utils';

numberSeparate(1234); // 123,4
numberSeparate(123456789.123456); // 123,456,789.123456
numberSeparate(123456789.123456, { isDealDecimal: true }); // 123,456,789.123,456
numberSeparate(12345, { digit: 2 }); // '1,23,45
numberSeparate(12345, { digit: 2, separate: '$' }); // 1$23$45
```

## 参数

| 参数    | 说明         | 类型                    | 默认值 | 是否必填 |
| ------- | ------------ | ----------------------- | ------ | -------- |
| v       | 要处理的数字 | `number`                | -      | 是       |
| options | 配置         | `NumberSeparateOptions` | -      | 否       |

### options

| 参数          | 说明             | 类型      | 默认值 | 是否必填 |
| ------------- | ---------------- | --------- | ------ | -------- |
| digit         | 分割位数         | `number`  | `3`    | 否       |
| separate      | 分割符           | `string`  | `,`    | 否       |
| isDealDecimal | 是否处理小数部分 | `boolean` | -      | 否       |


## 返回

| 参数 | 说明               | 类型     |
| ---- | ------------------ | -------- |
| v    | 分割后的数字字符串 | `string` |
