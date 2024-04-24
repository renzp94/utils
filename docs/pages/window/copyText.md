# copyText

复制文本。

> 此方法优先使用`navigator.clipboard.writeText`，如果不可用则降级为`document.execCommand`。

## 基本用法

传入一个字符串，将字符串复制到剪切板中，如果复制成功则返回`true`，否则返回`false`。

```ts
import { copyText } from '@renzp/utils'

const status = await copyText('复制文本'); // true
const text = await navigator.clipboard.readText()
console.log(text); // 复制文本
```

## 参数

| 参数 | 说明         | 类型     | 默认值 | 是否必填 |
| ---- | ------------ | -------- | ------ | -------- |
| text | 要复制的文本 | `string` | -      | 是       |


## 返回

| 参数 | 说明           | 类型               |
| ---- | -------------- | ------------------ |
| v    | 复制操作的状态 | `Promise<boolean>` |
