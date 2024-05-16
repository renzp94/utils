# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.9](https://github.com/renzp94/utils/compare/v0.0.8...v0.0.9) (2024-05-16)


### Bug修复

* **is:** 修复isPrimitive判断bigint类型错误的问题 ([36b9d9b](https://github.com/renzp94/utils/commit/36b9d9b0b313225066ccae27b4b5100f47dfc1f3))


### 其他

* 更新README ([76aa813](https://github.com/renzp94/utils/commit/76aa8138f79c0b67d3238d1ee976e0683b871ba5))
* **is:** 优化类型定义 ([588be24](https://github.com/renzp94/utils/commit/588be2492e212a54b7c97e5c7a275d3bf389cb96))
* **jsr:0.0.8:** published ([42a8a64](https://github.com/renzp94/utils/commit/42a8a64b7521f76b2819a0e2dea212650c90e03a))


### 新功能

* **is:** 添加isPrimitive(是否为基础数据类型)方法 ([52b4f83](https://github.com/renzp94/utils/commit/52b4f836fdcdefe274e976d63be119bea8621f49))
* **is:** 添加isRefData(是否为引用类型数据)方法 ([577d2e2](https://github.com/renzp94/utils/commit/577d2e219b4c7ea64d946b15dc9e467116f4ff1f))
* **is:** 添加isWeakMap和isWeakSet方法 ([f12039b](https://github.com/renzp94/utils/commit/f12039b1453d390aa1d32810fb4684ebd3e4c73f))
* **other:** 添加deepCopy(深拷贝)方法 ([8f059fc](https://github.com/renzp94/utils/commit/8f059fca1a5c0b6378bb6d72bccf53674d97ee49))


### 文档

* **getting-started:** 添加cdn引入包说明 ([a0aeea1](https://github.com/renzp94/utils/commit/a0aeea1d838e995b4e69c288cd458884491b8637))
* **is:** 添加isPrimitive方法的文档 ([dc1e488](https://github.com/renzp94/utils/commit/dc1e4882525c66737079eafb6e4fe51f32101e5b))
* **is:** 添加isRefData方法的文档 ([f799b3a](https://github.com/renzp94/utils/commit/f799b3a6bce646fa2b34b784fd08d5f1ad1a04bb))
* **is:** 添加isWeakMap和isWeakSet方法的文档 ([c632de2](https://github.com/renzp94/utils/commit/c632de210d39463bb40b1500cd02fae947a06660))
* **other:** 添加deepCopy方法的文档 ([dee8177](https://github.com/renzp94/utils/commit/dee8177b0d163b9e2fcc0cb9268068fa1c2eb070))

### [0.0.8](https://github.com/renzp94/utils/compare/v0.0.7...v0.0.8) (2024-05-16)


### 代码重构

* **is:** 重构isNull判断为[object Null] ([dc8590a](https://github.com/renzp94/utils/commit/dc8590ad27a3aaf977780d0a078cb04281b1740c))


### 其他

* 调整打包脚本 ([cc2c9bd](https://github.com/renzp94/utils/commit/cc2c9bd21e0d2a43e84e7fe72582d0d92f74c14c))
* 添加version配置文件 ([a8215de](https://github.com/renzp94/utils/commit/a8215dea02958e3b84a4327977068596b82cb395))
* **array:** 移除flatten函数deep入参，默认深度扁平化 ([8b98987](https://github.com/renzp94/utils/commit/8b98987c33bca2445f710a3dd965b93ec181e96d))
* **docs:** 更新coverage ([2480bc6](https://github.com/renzp94/utils/commit/2480bc625352761de63b01d9a5185790cdd04861))


### 文档

* **array:flatten:** 更新flatten属性配置说明 ([f933539](https://github.com/renzp94/utils/commit/f933539ab12cfff561cced3692a779da5801d013))

### [0.0.7](https://github.com/renzp94/utils/compare/v0.0.6...v0.0.7) (2024-04-28)

### [0.0.6](https://github.com/renzp94/utils/compare/v0.0.5...v0.0.6) (2024-04-28)


### Bug Fixes

* 修复打包内容中重复导出的问题 ([e4fa1c3](https://github.com/renzp94/utils/commit/e4fa1c36d7178f191cb34432707b5e7d77673b9d))

### [0.0.5](https://github.com/renzp94/utils/compare/v0.0.4...v0.0.5) (2024-04-24)


### Features

* **validator:** 添加emailValidator(邮箱验证)、idCardValidator(身份证验证)、phoneValidator(手机号验证)、telValidator(座机号验证)、zhValidator(中文验证)等方法 ([cb77502](https://github.com/renzp94/utils/commit/cb77502ff961a5c93f11e151d4abca0e81d7d023))


### Bug Fixes

* **docs:** 修正文档内容 ([33921da](https://github.com/renzp94/utils/commit/33921dacac2b166d9f17cfd2ba016dc31ebc59ce))

### [0.0.4](https://github.com/renzp94/utils/compare/v0.0.3...v0.0.4) (2024-04-23)


### Features

* **docs:** 添加文档 ([9316d5c](https://github.com/renzp94/utils/commit/9316d5cdcfca1b55aef965e4d691719f1f1d5d77))
* **is:** 添加isTruth(是否为真值)方法 ([2efe697](https://github.com/renzp94/utils/commit/2efe6975fa1ec292dc93a7def12271fc74314a78))


### Bug Fixes

* **array:** 修复isDef引入错误的问题 ([69f1788](https://github.com/renzp94/utils/commit/69f17884df39ff6c67c255cfd172369028422501))

### 0.0.3 (2024-04-22)


### Features

* 添加常用类型判断 ([d62ebce](https://github.com/renzp94/utils/commit/d62ebcece1b4e82ffd277c44616066f603cb8902))
* **array:** 添加flatten(扁平化)方法 ([df3e14a](https://github.com/renzp94/utils/commit/df3e14a7fa92a1b4cf9dac0943f512142ef443b8))
* **is:** 添加isFalsy(是否为假值判断)方法 ([61ff2eb](https://github.com/renzp94/utils/commit/61ff2eb63a77a7fb47ad28d84127c16443ed1c6b))
* **is:** 添加isJson(是否为json数据)方法 ([1ae7104](https://github.com/renzp94/utils/commit/1ae710415ecca259415fce02a5d7ebaf154b8471))
* **number:** 添加numberSeparate(数字分割)方法 ([376e057](https://github.com/renzp94/utils/commit/376e0575e154757bdb7020af804d35915834545d))
* **object:** 添加removeKey(删除对象指定属性)方法 ([962d5ca](https://github.com/renzp94/utils/commit/962d5cad909a8ca733d34c535254b7dd8a57c9d4))
* **window:** 添加copyText(复制文本)方法 ([97373fe](https://github.com/renzp94/utils/commit/97373feef272ddc37a343ffe835d54073a0ce660))

### 0.0.2 (2024-04-18)


### Features

* 添加常用类型判断 ([d62ebce](https://github.com/renzp94/utils/commit/d62ebcece1b4e82ffd277c44616066f603cb8902))
