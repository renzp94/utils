# emailValidator

邮箱验证。

邮箱格式为：`username@domain.tld`。
  - `username`是用户名。由英文字母、数字、下划线、点和中划线组成，但不能包含空格或其他特殊字符。
  - `@`是分隔符。
  - `domain`是域名。
  - `.tld`是顶级域名。


## 基本用法

传入一个字符串，如果是邮箱格式则返回`true`，否则返回`false`。

```ts
import { emailValidator } from '@renzp/utils'

emailValidator('lisi@qq.com'); // true
emailValidator('wangwu@163.com'); // true
emailValidator('xiaoli@gmail.com'); // true
emailValidator('lisi@qq'); // false
```

## 参数

| 参数 | 说明         | 类型     | 默认值 | 是否必填 |
| ---- | ------------ | -------- | ------ | -------- |
| v    | 验证的字符串 | `string` | -      | 是       |


## 返回

| 参数 | 说明       | 类型      |
| ---- | ---------- | --------- |
| v    | 是否为邮箱 | `boolean` |
