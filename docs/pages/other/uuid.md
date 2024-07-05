# uuid

生成UUID。

## 基本用法

随机生成UUID。如果需要含有大写字母，可传入`true`。

```ts
import { uuid } from '@renzp/utils';

uuid(); // nlcvepvq-w764-vtn5-ut6t-13r7tyn0j8hb
uuid(true); // 4EbKOG6X-k6DJ-I5AJ-41FM-mP5At4u8D25G
```

## 参数

| 参数         | 说明             | 类型      | 默认值  | 是否必填 |
| ------------ | ---------------- | --------- | ------- | -------- |
| hasUppercase | 是否含有大写字母 | `boolean` | `false` | 是       |


## 返回

| 参数 | 说明       | 类型     |
| ---- | ---------- | -------- |
| v    | 生成的UUID | `string` |
