import { defineConfig } from 'vitepress'
import pkg from '../../package.json'
import { getPages } from '../pages'

export default async () => {
  const sidebar = await getPages()
  return defineConfig({
    title: 'Utils',
    description: '一款零依赖、实用的Javascript/Typescript工具库',
    lastUpdated: true,
    metaChunk: true,
    rewrites: {
      'pages/guide/gettingStarted.md': 'index.md',
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
      socialLinks: [
        { icon: 'github', link: 'https://github.com/renzp94/utils' },
      ],
      sidebar,
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
}
