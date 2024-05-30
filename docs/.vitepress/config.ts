import { defineConfig } from 'vitepress'
import pkg from '../../package.json'

export default defineConfig({
  title: 'Utils',
  description: '一款零依赖、实用的Javascript/Typescript工具库',
  lastUpdated: true,
  metaChunk: true,
  rewrites: {
    'pages/guide/getting-started.md': 'index.md',
    'pages/:category/:page.md': ':category/:page.md',
  },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: {
      src: '/logo.png',
      style: 'border-radius: 50%;height: 32px;width: 32px;',
    },
    siteTitle: 'Utils',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    nav: [
      {
        text: pkg.version,
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/renzp94/utils/blob/main/CHANGELOG.md',
          },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/renzp94/utils' }],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是@renzp/utils?', link: '/guide/what-is' },
          { text: '快速开始', link: '/' },
        ],
      },
      {
        text: '数组操作',
        collapsed: false,
        items: [
          { text: 'first', link: '/array/first' },
          { text: 'flatten', link: '/array/flatten' },
          { text: 'last', link: '/array/last' },
        ],
      },
      {
        text: '类型判断',
        collapsed: false,
        items: [
          { text: 'isArray', link: '/is/isArray' },
          { text: 'isBigint', link: '/is/isBigint' },
          { text: 'isBoolean', link: '/is/isBoolean' },
          { text: 'isDate', link: '/is/isDate' },
          { text: 'isDef', link: '/is/isDef' },
          { text: 'isFalsy', link: '/is/isFalsy' },
          { text: 'isFunction', link: '/is/isFunction' },
          { text: 'isJson', link: '/is/isJson' },
          { text: 'isMap', link: '/is/isMap' },
          { text: 'isNull', link: '/is/isNull' },
          { text: 'isNumber', link: '/is/isNumber' },
          { text: 'isObject', link: '/is/isObject' },
          { text: 'isPrimitive', link: '/is/isPrimitive' },
          { text: 'isRefData', link: '/is/isRefData' },
          { text: 'isRegExp', link: '/is/isRegExp' },
          { text: 'isSet', link: '/is/isSet' },
          { text: 'isString', link: '/is/isString' },
          { text: 'isSymbol', link: '/is/isSymbol' },
          { text: 'isTruth', link: '/is/isTruth' },
          { text: 'isUnDef', link: '/is/isUnDef' },
          { text: 'isUndefined', link: '/is/isUndefined' },
          { text: 'isWeakMap', link: '/is/isWeakMap' },
          { text: 'isWeakSet', link: '/is/isWeakSet' },
        ],
      },
      {
        text: '数字操作',
        collapsed: false,
        items: [{ text: 'numberSeparate', link: '/number/numberSeparate' }],
      },
      {
        text: '对象操作',
        collapsed: false,
        items: [{ text: 'removeKey', link: '/object/removeKey' }],
      },
      {
        text: '验证器',
        collapsed: false,
        items: [
          { text: 'emailValidator', link: '/validator/emailValidator' },
          { text: 'idCardValidator', link: '/validator/idCardValidator' },
          { text: 'numberValidator', link: '/validator/numberValidator' },
          { text: 'phoneValidator', link: '/validator/phoneValidator' },
          { text: 'telValidator', link: '/validator/telValidator' },
          { text: 'zhValidator', link: '/validator/zhValidator' },
        ],
      },
      {
        text: '浏览器操作',
        collapsed: false,
        items: [{ text: 'copyText', link: '/window/copyText' }],
      },
      {
        text: '其他',
        collapsed: false,
        items: [{ text: 'deepClone', link: '/other/deep-clone' }],
      },
    ],
    editLink: {
      pattern: 'https://github.com/renzp94/utils/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    notFound: {
      title: '迷途',
      quote: '前方已是未知路，望君回头。',
      linkLabel: '回到首页',
      linkText: '回到首页',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
  },
})
