# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm add @renzp/utils
```

```sh [pnpm]
$ pnpm add @renzp/utils
```

```sh [yarn]
$ yarn add @renzp/utils
```

```sh [bun]
$ bun add @renzp/utils
```

```js [cdn]
<script type="importmap">
    {
        "imports": {
            "@renzp/utils": "https://esm.sh/@renzp/utils"
        }
    }
</script>
<script type="module">
  import { isNumber } from '@renzp/utils';
</script>
```

:::


## 使用

```ts
import { isNumber } from '@renzp/utils';
// import { isNumber } from '@renzp/utils/is' 

const v: unknown = Math.PI;

if (isNumber(v)) {
  console.log(v.toFixed(2)); // 3.14
}
```
