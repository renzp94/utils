# zhValidator

是否为中文，默认匹配汉字和中文标点符号。可通过`match`参数改变匹配模式。

## 基本用法

传入一个字符串，如果是中文则返回`true`，否则返回`false`。

```ts
import { zhValidator } from '@renzp/utils'

zhValidator('这是一段中文文字，还有中文标点符号。'); // true
zhValidator('这是一段中文文字', ZH_MATCH.W); // true
zhValidator('这是一段中文文字，还有中文标点符号。', ZH_MATCH.W); // false
zhValidator('这是一段含有英文符号的字符串.'); // false
zhValidator('《》（）', ZH_MATCH.S); // true
```

## 参数

| 参数  | 说明         | 类型       | 默认值         | 是否必填 |
| ----- | ------------ | ---------- | -------------- | -------- |
| v     | 验证的字符串 | `string`   | -              | 是       |
| match | 匹配模式     | `ZH_MATCH` | `ZH_MATCH.W_S` | 否       |

```ts
export enum ZH_MATCH {
  // 匹配中文标点符号
  S = 'symbol',
  // 匹配汉字
  W = 'word',
  // 匹配汉字和中文标点符号
  W_S = 'word_symbol',
}
```

## 返回

| 参数 | 说明       | 类型      |
| ---- | ---------- | --------- |
| v    | 是否为中文 | `boolean` |
