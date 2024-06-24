# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.1](https://github.com/renzp94/utils/compare/v0.3.0...v0.3.1) (2024-06-24)


### 其他

* **is:** 调整isEqual函数引入其他方法的方式 ([3cb5cd9](https://github.com/renzp94/utils/commit/3cb5cd9f0d56bc165ceb3073667b6e7e11dec040))

## [0.3.0](https://github.com/renzp94/utils/compare/v0.2.3...v0.3.0) (2024-06-21)


### ⚠ BREAKING CHANGES

* 重命名equal函数为isEqual函数

### Bug修复

* **array:** 修复compact函数类型提示错误的问题 ([e30da80](https://github.com/renzp94/utils/commit/e30da80449388f891cc49455e5b112f92e800fa5))


### 代码重构

* 重命名equal为isEqual ([2cb787a](https://github.com/renzp94/utils/commit/2cb787a631270174bc8c950a141606c8d32e0c72))


### 其他

* 调整isUndefined函数和isUnDef函数的文件名 ([6d7d1cd](https://github.com/renzp94/utils/commit/6d7d1cd1895626902ffacd8ae6d4e1516429e50c))


### 新功能

* **is:** 添加isArrayBuffer(是否为ArrayBuffer类型)方法 ([cf2640d](https://github.com/renzp94/utils/commit/cf2640d2c5caac765a823540d3d1ef9483f2f90d))
* **is:** 添加isEmpty(是否为空)方法 ([dd668f5](https://github.com/renzp94/utils/commit/dd668f5005a7c3d30363f1691fe406a5978cc839))

### [0.2.3](https://github.com/renzp94/utils/compare/v0.2.2...v0.2.3) (2024-06-21)


### 其他

* 调整打包目标降级为es6 ([cc8eb86](https://github.com/renzp94/utils/commit/cc8eb869b1295ca66e7fbe0f24dd65571f7aa2f6))

### [0.2.2](https://github.com/renzp94/utils/compare/v0.2.1...v0.2.2) (2024-06-20)


### 其他

* logo改成圆角 ([6189074](https://github.com/renzp94/utils/commit/61890745427144a2223dc6aab21b4c2286c8d423))


### 新功能

* **object:** 添加omit和pick支持自定义函数 ([60279ca](https://github.com/renzp94/utils/commit/60279caba625b4f3872192e0f95c9cf95ca9b756))


### 文档

* **object:** 调整omit和pick文档 ([809dd78](https://github.com/renzp94/utils/commit/809dd782bc55a9fea5834316b6911e424451336c))

### [0.2.1](https://github.com/renzp94/utils/compare/v0.2.0...v0.2.1) (2024-06-18)


### 新功能

* **array:** 添加sort(数组排序)方法 ([3984609](https://github.com/renzp94/utils/commit/398460907549fa6f743e203919c8ca0a9cd25830))


### 文档

* **array:** 添加sort文档 ([fc4159e](https://github.com/renzp94/utils/commit/fc4159e3a12782fc2fd801a2761bd843dc3f156f))

## [0.2.0](https://github.com/renzp94/utils/compare/v0.1.2...v0.2.0) (2024-06-18)


### ⚠ BREAKING CHANGES

* **array(union):** `array(union)`: 移除union的strict模式使用SameValueZero比较
* **array(intersection):** `array(intersection)`: 移除intersection的strict模式使用SameValueZero比较
* **array(unique):** `array(unique)`: 移除unique的strict模式使用SameValueZero比较
* **array(difference):** `array(difference)`第二个参数`filter`改为`options.filter`

### 新功能

* **other:** 添加equal(是否相等)方法 ([fcf1f58](https://github.com/renzp94/utils/commit/fcf1f5873f09d4432adde2b37252ae471ab9ba3b))


### 代码重构

* **array(difference):** 调整difference使用SameValueZero进行比较并且调整filter传参方式 ([2c0de38](https://github.com/renzp94/utils/commit/2c0de38969b133ca773c24b6b19349aea31e46d5))
* **array(intersection):** 移除intersection的strict模式使用SameValueZero比较 ([38531c2](https://github.com/renzp94/utils/commit/38531c2af4a9779e2c75bd289612efbacfd86f91))
* **array(union):** 移除union的strict模式使用SameValueZero比较 ([a794dbc](https://github.com/renzp94/utils/commit/a794dbc21202c95a74293bab25dbaf23c4ab8574))
* **array(unique):** 移除unique的strict模式使用SameValueZero比较 ([62defe6](https://github.com/renzp94/utils/commit/62defe6966bb81d013402c17942fa1b05097a4cc))


### 其他

* **array(xor):** 使用公共的FilterOptions类型 ([56e904d](https://github.com/renzp94/utils/commit/56e904dced3f5d06e8ea46c4d860d644a07a16c0))


### 文档

* **array(difference):** 调整difference文档 ([2d8a17c](https://github.com/renzp94/utils/commit/2d8a17cef58351e8990877683079a18b7d505a1a))
* **array(intersection):** 调整intersection文档 ([d032e0c](https://github.com/renzp94/utils/commit/d032e0c4ff79a690bd837bfce47d2941904643e2))
* **array(union):** 调整union文档 ([c7ed06d](https://github.com/renzp94/utils/commit/c7ed06d774bb0cf0bcfafa84563d40c02d262546))
* **array(unique):** 调整unique文档 ([bf01ca2](https://github.com/renzp94/utils/commit/bf01ca218893d4a8beac658e057cd9640f312d14))
* **array(xor):** 调整xor文档 ([1e4029c](https://github.com/renzp94/utils/commit/1e4029c008fe9ff73dfb479be92c196ef13f995a))
* **other:** 添加equal文档 ([f9aa457](https://github.com/renzp94/utils/commit/f9aa457f634e881a2a44d08b3526f4741391cf2e))

### [0.1.2](https://github.com/renzp94/utils/compare/v0.1.1...v0.1.2) (2024-06-17)


### Bug修复

* **array(difference):** 修复difference使用filter命中逻辑错误的问题 ([85ea9ad](https://github.com/renzp94/utils/commit/85ea9ad039745b9d25cb1d9f0477ca02f0781589))


### 新功能

* **array:** 将xor重命名为intersection ([368a3c6](https://github.com/renzp94/utils/commit/368a3c60442e3d127d7ec537c365420f310e0af8))
* **array:** 添加xor(数组取补集)方法 ([f301eb4](https://github.com/renzp94/utils/commit/f301eb4ed98ec5645686b4addbbe6b539344cf31))


### 文档

* 调整移动端网站中文适配 ([db6c3c4](https://github.com/renzp94/utils/commit/db6c3c4f08d3be148c054133c86c9b1976982c0d))
* **array:** 添加xor文档 ([04d0075](https://github.com/renzp94/utils/commit/04d0075d0a5576571dc5ab9f5cb196f19e9f5e2f))


### 其他

* **array:** 替换difference和unique的filter类型定位为Filter ([76f9c43](https://github.com/renzp94/utils/commit/76f9c431852d0de9092cd25e6975602c8f05b273))

### [0.1.1](https://github.com/renzp94/utils/compare/v0.1.0...v0.1.1) (2024-06-15)


### 新功能

* **array:** 添加remove(数组删除)方法 ([30ce681](https://github.com/renzp94/utils/commit/30ce68188200a9c2a219f9bda26aed7956ec214e))
* **array:** 添加union(数组取并集)方法 ([ab62f22](https://github.com/renzp94/utils/commit/ab62f2252963da8906b302d93429a415c19ac416))


### 文档

* 添加特别说明 ([bb9e5a2](https://github.com/renzp94/utils/commit/bb9e5a2ae7000fcafd8b883d0d2a19114669cf0e))
* **array:** 添加remove文档 ([93757c6](https://github.com/renzp94/utils/commit/93757c6f4d6e8a6ef7fe0ab3d502daa27b975e2d))
* **array:** 添加union文档 ([fe61f50](https://github.com/renzp94/utils/commit/fe61f502813016aae9b24f684a2e4bfcaf6737ba))
* **array:** 修正xor文档错别字 ([5566de8](https://github.com/renzp94/utils/commit/5566de8d61b3be60ad20a6c47fa87c20da00297c))


### 其他

* **array(union):** 优化代码中数组移除代码 ([1cc4690](https://github.com/renzp94/utils/commit/1cc4690feb24985f7861226138ce90d6487bb0c6))
* **array(xor):** 优化代码中数组移除代码 ([e96bcb7](https://github.com/renzp94/utils/commit/e96bcb778ed2faa6ddcd5c7e99e2b2e0a3f5aa88))

## [0.1.0](https://github.com/renzp94/utils/compare/v0.0.23...v0.1.0) (2024-06-14)


### ⚠ BREAKING CHANGES

* **array:unique:** `unique`第二个参数`filter`改为`options.filter`

### 其他

* **jsr:0.0.23:** published ([688d7d1](https://github.com/renzp94/utils/commit/688d7d13d618ca4f0036186b4f9dafb9ad3680c3))


### 代码重构

* **array: unique:** 重构存在判断逻辑 ([fbd38af](https://github.com/renzp94/utils/commit/fbd38af7e1c7431d1ffceb6217f532a90da96528))


### 新功能

* **array:unique:** 添加strict参数 ([919ef50](https://github.com/renzp94/utils/commit/919ef50a2bef0f28cf03d39915ba96afb4272864))
* **array:** 添加xor(数据取交集)方法 ([a2282ee](https://github.com/renzp94/utils/commit/a2282ee45effa0a538536f8ab79f44a39105e31f))


### 文档

* **array:unique:** 添加strict参数文档 ([507c7a4](https://github.com/renzp94/utils/commit/507c7a4d8369a528dec71396e991db180eb36602))
* **array:** 添加xor文档 ([901754e](https://github.com/renzp94/utils/commit/901754e6d4573a7441bb449dd7b3380ad28f908a))

### [0.0.23](https://github.com/renzp94/utils/compare/v0.0.22...v0.0.23) (2024-06-13)


### 代码重构

* **other:** 抽离公共节流防抖的公共函数 ([c4d48f5](https://github.com/renzp94/utils/commit/c4d48f5fec2a134286fd8ef8a06fdbbd5647aa3c))


### 新功能

* **other:** 添加debounce(创建防抖函数)方法 ([b1d3f4f](https://github.com/renzp94/utils/commit/b1d3f4fae1bfb26149364522a5bc427d28199827))
* **other:** 添加throttle的revokeCancel(撤销取消节流)方法及优化逻辑 ([67c2062](https://github.com/renzp94/utils/commit/67c20626c3de82abf7e744554fed3e6fa735a0c1))


### 文档

* **other:** 添加debounce文档 ([dcbce26](https://github.com/renzp94/utils/commit/dcbce26818351458bb2d862760e113f1fc9fc349))
* **other:** 添加throttle的revokeCancel方法说明 ([faad86c](https://github.com/renzp94/utils/commit/faad86c8685d4f6e5fb221ae68fcb529e1e8d4bf))
* **other:** 优化throttle文档 ([7473364](https://github.com/renzp94/utils/commit/7473364e8e82ca3f1add70f125f0486340b607d2))


### 其他

* 更新依赖包版本 ([d542489](https://github.com/renzp94/utils/commit/d5424891dba367ab38b237558f161f4931ff9883))
* 将happy-dom注入排除测试用例执行 ([8838896](https://github.com/renzp94/utils/commit/8838896e5ee8ea4941e83631e394f99a12204940))
* **jsr:0.0.22:** published ([475185b](https://github.com/renzp94/utils/commit/475185bc7dfc67e6e6058a90fcba7faf1b812a2f))
* update coverage.md ([17172d5](https://github.com/renzp94/utils/commit/17172d5aa8aef1240740cc6db83ce1cd745a79f3))

### [0.0.22](https://github.com/renzp94/utils/compare/v0.0.21...v0.0.22) (2024-06-12)


### 新功能

* **other:** 添加throttle(创建节流函数)方法 ([88e9b77](https://github.com/renzp94/utils/commit/88e9b778e061ee796ab16771c67eec899359ae19))


### 文档

* **other:** 添加throttle方法 ([e31dbea](https://github.com/renzp94/utils/commit/e31dbead2d766858b1c3288be51e3f0d8ee3bf0d))


### 其他

* **jsr:0.0.21:** published ([4a77d49](https://github.com/renzp94/utils/commit/4a77d499d0f9e7a4c439e2066c7a2a820b64f4ac))
* update coverage.md ([78f10c5](https://github.com/renzp94/utils/commit/78f10c58a7adac4c10dd1276ff43a3e16b96dd38))

### [0.0.21](https://github.com/renzp94/utils/compare/v0.0.20...v0.0.21) (2024-06-11)


### 文档

* **object:** 添加pick文档 ([9f664bf](https://github.com/renzp94/utils/commit/9f664bf9eefe2f4a81fb06c296a8e164f824a17e))


### 新功能

* **object:** 将removeKey更名为omit ([c0d0cd7](https://github.com/renzp94/utils/commit/c0d0cd7551da0b8c46a6499edb0e214a7f0ac744))
* **object:** 添加pick(获取对象指定属性)方法 ([401cd15](https://github.com/renzp94/utils/commit/401cd15c51e35cde35731de4ae84d3a7fe0baf8f))


### 其他

* 优化npm发布 ([4c8d047](https://github.com/renzp94/utils/commit/4c8d04796f799770e3ca744b8f43510f9469c363))
* **jsr:0.0.20:** published ([4dde852](https://github.com/renzp94/utils/commit/4dde852906915e72321069c6ec799a0c67f4d209))
* update coverage.md ([d2d19ac](https://github.com/renzp94/utils/commit/d2d19acc35d2079c61f9686a19d7afc40bc45807))

### [0.0.20](https://github.com/renzp94/utils/compare/v0.0.19...v0.0.20) (2024-06-11)


### 新功能

* **array:** 添加compact(去除假值)方法 ([56cb646](https://github.com/renzp94/utils/commit/56cb646025796bdbe0fb7e0df1f14640d55f2e05))
* **array:** 添加objectify(数组转对象)方法 ([2c193ff](https://github.com/renzp94/utils/commit/2c193ff093bb1ab55dac4615b3bcaa916c489b95))


### 文档

* **array:** 添加compact文档 ([713a27d](https://github.com/renzp94/utils/commit/713a27d838a4a407b444669623501d028a4c95bc))
* **array:** 添加objectify文档 ([dddd4b5](https://github.com/renzp94/utils/commit/dddd4b5c35c3f8cf967e7257627055a84195956f))


### 其他

* 更新依赖 ([d177891](https://github.com/renzp94/utils/commit/d17789115b2488dfa83776570316711cdf62cf51))
* **is:** 移除剔除null和undefined的类型，使用内置类型NonNullable ([b7c8e9b](https://github.com/renzp94/utils/commit/b7c8e9bbf8e1f0db0f8bed60c7712512104af657))
* **jsr:0.0.19:** published ([84ccdcd](https://github.com/renzp94/utils/commit/84ccdcdd99d6dabbd5eda85860cfb7ec1001694b))
* update coverage.md ([a61e33d](https://github.com/renzp94/utils/commit/a61e33d4168f4b8f56ef2922575aa91910c06008))

### [0.0.19](https://github.com/renzp94/utils/compare/v0.0.18...v0.0.19) (2024-06-04)


### Bug修复

* **types:** 修复arrayElementType文件导出错误的问题 ([de6f56c](https://github.com/renzp94/utils/commit/de6f56ca079e0db64e85e59812a2b5816fce2609))


### 其他

* **jsr:0.0.18:** published ([af64371](https://github.com/renzp94/utils/commit/af64371a23f5139f889fd65fe0fe3fc0bcb9f214))
* update coverage.md ([3b9bc4c](https://github.com/renzp94/utils/commit/3b9bc4cfe5b3787921e80043ebe8f4118af2dec5))

### [0.0.18](https://github.com/renzp94/utils/compare/v0.0.17...v0.0.18) (2024-06-04)


### Bug修复

* **object:** 修复merge函数返回类型错误的问题 ([ab9ef28](https://github.com/renzp94/utils/commit/ab9ef28f70ae500fdff28ebc0a393cc9f804bc06))
* **types:** 修复MergeType类型推倒不对的问题 ([c40164c](https://github.com/renzp94/utils/commit/c40164c1c8fb2d05c5ef14c73923443261a3586a))


### 新功能

* **types:** 添加ArrayElementType(获取数组中的元素类型)方法 ([c85f936](https://github.com/renzp94/utils/commit/c85f936814cf8d372b84c7b53af2c3b4bf1d5bf6))
* **types:** 添加Expand(展开悬停类型信息)方法 ([87e2abe](https://github.com/renzp94/utils/commit/87e2abebb5a4c1e6606e999b1c1a445d28470cd6))
* **types:** 添加ExpandRecursively(展开悬停全部类型信息)方法 ([62ba13d](https://github.com/renzp94/utils/commit/62ba13da224b313670869eb5a5bed44aa0293d24))


### 文档

* **types:** 调整MergeType文档 ([05d1f97](https://github.com/renzp94/utils/commit/05d1f97dda8e6aa81de51a298e068282f44f2d4a))
* **types:** 添加ArrayElementType文档 ([79a7006](https://github.com/renzp94/utils/commit/79a70062772a72ebbcc3dfa871d307dcafb31380))
* **types:** 添加Expand文档 ([e5dd3bf](https://github.com/renzp94/utils/commit/e5dd3bf64f97b449034e84690e74080cd5216571))
* **types:** 添加ExpandRecursively方法 ([448b95f](https://github.com/renzp94/utils/commit/448b95f3c00570e6a2aadd6c1f5468344feeede6))


### 其他

* 调整coverage生成脚本及jsr发布脚本 ([39b18ba](https://github.com/renzp94/utils/commit/39b18ba3f39136643b0e8fd1e6504ae34478a435))
* 调整types目录结构 ([36d6ff6](https://github.com/renzp94/utils/commit/36d6ff6ca159a9e35ce0976e80c11b4338ead7b6))
* **jsr:0.0.17:** published ([ce83972](https://github.com/renzp94/utils/commit/ce83972533353e4482112c935c111c45842058b8))
* update coverage.md ([03501f7](https://github.com/renzp94/utils/commit/03501f72739f56b4a4381306ffeab11d1e2aeb04))
* update coverage.md ([44b50ed](https://github.com/renzp94/utils/commit/44b50edfb90a3a96f8fab8b781db90b0057ede9d))

### [0.0.17](https://github.com/renzp94/utils/compare/v0.0.16...v0.0.17) (2024-06-03)


### 其他

* 调整脚本代码 ([4a2b585](https://github.com/renzp94/utils/commit/4a2b58549f3c4d8b3f89898319b3be49249946b6))
* **jsr:0.0.16:** published ([0c5c8e9](https://github.com/renzp94/utils/commit/0c5c8e94ce0d622ee1639a44519a0821cd6d8918))


### 新功能

* **object:** 添加merge(合并对象)方法 ([af25372](https://github.com/renzp94/utils/commit/af253728c02da08c763dc76cd156708c938ae6f8))
* **types:** 添加MergeType(类型合并)类型 ([69e14a7](https://github.com/renzp94/utils/commit/69e14a746755620dd52363ef33680e9d95c2e753))


### 文档

* 修复README中的coverage点击跳转问题 ([22d8b2a](https://github.com/renzp94/utils/commit/22d8b2ab0c0f2a78e2f142adf71a3c63e66c1ea1))
* **object:** 添加merge文档 ([220892d](https://github.com/renzp94/utils/commit/220892daba0a3d7c13584c2ed1fa73bcc47af456))
* **types:** 添加MergeType文档 ([a99e901](https://github.com/renzp94/utils/commit/a99e90112da8d75a291e89370d27319fe9261442))

### [0.0.16](https://github.com/renzp94/utils/compare/v0.0.15...v0.0.16) (2024-06-01)


### 其他

* 本地生成coverage ([7359b22](https://github.com/renzp94/utils/commit/7359b22c84a6fdc5bd61b43001c0a2987b9cc496))
* 调整jsr发布脚本 ([ddbecef](https://github.com/renzp94/utils/commit/ddbecef731ab6fcdb7e5f2d97f87c64ee54fd98e))
* **jsr:0.0.15:** published ([da5906f](https://github.com/renzp94/utils/commit/da5906f65e85801f2363f3f93b715c92d6b05127))

### [0.0.15](https://github.com/renzp94/utils/compare/v0.0.14...v0.0.15) (2024-06-01)


### 其他

* 调整代码目录结构 ([41b3967](https://github.com/renzp94/utils/commit/41b3967784ee72b19ff218acb720edbee98a437c))
* **jsr:0.0.14:** published ([012db67](https://github.com/renzp94/utils/commit/012db6739b86f0b9c74bc1750dff931125f7d442))


### Bug修复

* **array:** 修复difference方法传入的key不存在对象中及过滤函数过滤不正确的问题 ([5ca0374](https://github.com/renzp94/utils/commit/5ca03748b7beb68cc38ac23190cb624008625e59))


### 测试

* 优化代码及测试单元使coverage达到100% ([22f6261](https://github.com/renzp94/utils/commit/22f6261a2695be0b794ff08be73fc35a74cb9a2e))

### [0.0.14](https://github.com/renzp94/utils/compare/v0.0.13...v0.0.14) (2024-05-31)


### 其他

* **jsr:0.0.13:** published ([e9f8b7d](https://github.com/renzp94/utils/commit/e9f8b7d569539d933cb30ceca439329b61f67592))


### 新功能

* **array:** 添加unique(数组去重)方法 ([cd9b3bb](https://github.com/renzp94/utils/commit/cd9b3bb42ca803c44c3361a566f09662756ae782))


### 文档

* 调整侧边栏默认为关闭 ([20d5e26](https://github.com/renzp94/utils/commit/20d5e26bdea0cbde9118476d8b11a23635410606))
* **array:** 添加unique文档 ([95e48a7](https://github.com/renzp94/utils/commit/95e48a7ea70c320d1bf14deecf067b008177840f))

### [0.0.13](https://github.com/renzp94/utils/compare/v0.0.12...v0.0.13) (2024-05-30)


### 其他

* 调整引入路径 ([ee3fdeb](https://github.com/renzp94/utils/commit/ee3fdebb433b03ffc955286b9a3eb2d11c266305))
* **jsr:0.0.12:** published ([2af85a3](https://github.com/renzp94/utils/commit/2af85a37aa60917cdfab3249c6a335938f11115e))


### 测试

* **other:** 添加radom测试用例 ([23434a7](https://github.com/renzp94/utils/commit/23434a743a6fc37d69d4fe12be30cb677e00e40e))


### 新功能

* **array:** 添加createArray(创建数组)方法 ([7005cc0](https://github.com/renzp94/utils/commit/7005cc01438f939b2f8fe59ccc790ff2488dd278))
* **other:** 添加radom(生成随机数)方法 ([a6f41de](https://github.com/renzp94/utils/commit/a6f41de1d884827a69f14adc63bca714cd2c815a))
* **other:** 添加uuid(生成UUID)方法 ([fea8e3b](https://github.com/renzp94/utils/commit/fea8e3baf557a6cf2db3ce9aed9655995012a87d))


### 文档

* 根据目录自动生成侧边栏 ([3425403](https://github.com/renzp94/utils/commit/342540308e3107eac09d43dc93fda946344432d7))
* **array:** 添加createArray方法的文档 ([6f4d41b](https://github.com/renzp94/utils/commit/6f4d41bf77af2b424c32572cb0e08456858174ea))
* **other:** 添加radom方法的文档 ([475aaed](https://github.com/renzp94/utils/commit/475aaed42a2cf0b786830c63c3b328e4c8b67467))
* **other:** 添加uuid方法的文档 ([173b55f](https://github.com/renzp94/utils/commit/173b55fdc5a6e1d37a0c3928994ef283a6e4fd78))

### [0.0.12](https://github.com/renzp94/utils/compare/v0.0.10...v0.0.12) (2024-05-30)


### 新功能

* **array:** 添加difference(过滤数组)方法 ([089cb86](https://github.com/renzp94/utils/commit/089cb8662dd8e21611614b571c7acd4db3c9ce66))
* **array:** 添加first(获取第一元素)和last(获取最后一个元素)方法 ([a2df643](https://github.com/renzp94/utils/commit/a2df6430f4e61c14c9dd2974cf393d069110437c))


### 文档

* 调整文件名及路径 ([82e7ae1](https://github.com/renzp94/utils/commit/82e7ae1bd4783e3885914a80cfb492560c8f92c3))
* **array:** 添加difference方法的文档 ([a5056a1](https://github.com/renzp94/utils/commit/a5056a16947e81e0fdab2b01fb9d65cb6b3c70d3))
* **array:** 添加first和last方法的文档 ([135be64](https://github.com/renzp94/utils/commit/135be644867cd5b07a2a4ed22b96f4b6b3900f65))
* **other:** 调整deepCopy为deepClone ([8bd624f](https://github.com/renzp94/utils/commit/8bd624f60761969cafde3ad9e059c48987f96e55))
* **validator:** 添加numberValidator路由 ([3decc80](https://github.com/renzp94/utils/commit/3decc8006dbefd55729c7c3cd54e1b6ac4b52d23))


### 其他

* **other:** deepCopy更名为deepClone ([fd65200](https://github.com/renzp94/utils/commit/fd65200035ef24f544a2558f78f1fb55af1756e1))
* **release:** 0.0.11 ([08a4ed7](https://github.com/renzp94/utils/commit/08a4ed7d966931bb3f6cb4c82f8ead468a46b0f3))
* **validator:** 添加numberValidator方法返回值 ([7f4dcfc](https://github.com/renzp94/utils/commit/7f4dcfc904de459cc804f341885a7c0f7d92164c))
* **validator:** 移除无用导入 ([59fc595](https://github.com/renzp94/utils/commit/59fc5953cbe567a461ec5f2f9647b8d1e106b592))


### CI配置

* 调整打包脚本 ([20835c7](https://github.com/renzp94/utils/commit/20835c783458f2d705c6d1dab3704218d7e246d0))
* 调整文档部署action触发时机 ([50cf38f](https://github.com/renzp94/utils/commit/50cf38ff8527837d62e297fd02fe5ebe579854d8))

### [0.0.11](https://github.com/renzp94/utils/compare/v0.0.10...v0.0.11) (2024-05-22)


### 文档

* **validator:** 添加numberValidator路由 ([3decc80](https://github.com/renzp94/utils/commit/3decc8006dbefd55729c7c3cd54e1b6ac4b52d23))
* **other:** 调整deepCopy为deepClone ([f96e55](https://github.com/renzp94/utils/commit/8bd624f60761969cafde3ad9e059c48987f96e55))


### CI配置

* 调整文档部署action触发时机 ([50cf38f](https://github.com/renzp94/utils/commit/50cf38ff8527837d62e297fd02fe5ebe579854d8))


### 其他

* deepCopy更名为deepClone ([2845de7](https://github.com/renzp94/utils/commit/2845de7b0fb4506a8ab14f46a0ba7a167ce99f9a))
* **validator:** 添加numberValidator方法返回值 ([7f4dcfc](https://github.com/renzp94/utils/commit/7f4dcfc904de459cc804f341885a7c0f7d92164c))
* **other:** deepCopy更名为deepClone ([f1756e1](https://github.com/renzp94/utils/commit/fd65200035ef24f544a2558f78f1fb55af1756e1))

### [0.0.10](https://github.com/renzp94/utils/compare/v0.0.9...v0.0.10) (2024-05-20)


### 其他

* **jsr:0.0.9:** published ([9035e09](https://github.com/renzp94/utils/commit/9035e0975cbf0f7bf105a3a16d53b0fce77f6313))


### 新功能

* **validator:** 添加numberValidator(数字验证)方法 ([d8ffde8](https://github.com/renzp94/utils/commit/d8ffde8a00b757778c1a4921b05a99a80518e59c))


### 文档

* **validator:** 添加numberValidator方法的文档 ([75f232e](https://github.com/renzp94/utils/commit/75f232eca94b5f884fea34b9111ffa339090bc8c))

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
