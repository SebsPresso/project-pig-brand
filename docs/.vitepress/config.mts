import { defineConfig } from 'vitepress'

// Local builds use /. The Pages workflow supplies its configured base path.
const base = process.env.DOCS_BASE || '/'
if (!base.startsWith('/') || !base.endsWith('/')) {
  throw new Error(
    'DOCS_BASE must start and end with a slash, for example /brand/.',
  )
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'Project Pig Brand',
  description: 'A shared home for Project Pig brand documentation.',
  base,
  lastUpdated: true,
  cleanUrls: false,
  // Discourage indexing, but never treat this tag as access control.
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    siteTitle: 'Project Pig Brand',
    nav: [
      { text: '品牌故事', link: '/brand/' },
      { text: '做到哪了', link: '/brand/system/baseline' },
      { text: '品牌系统', link: '/brand/system/' },
    ],
    sidebar: [
      {
        text: '先读这里',
        items: [
          { text: '品牌故事', link: '/brand/' },
          { text: '做到哪了', link: '/brand/system/baseline' },
          { text: '品牌系统', link: '/brand/system/' },
        ],
      },
      {
        text: '设计与验证',
        collapsed: true,
        items: [
          { text: 'B1 · 品牌定义', link: '/brand/system/b1/' },
          { text: 'W3 · 比较创意', link: '/brand/system/w3/' },
          { text: 'B2 · 品牌表达', link: '/brand/system/b2/' },
          { text: 'B3 · 体验与履约', link: '/brand/system/b3/' },
          { text: 'B4 · 交付与维护', link: '/brand/system/b4/' },
        ],
      },
      {
        text: '查方法和原稿',
        collapsed: true,
        items: [
          { text: '工作方法', link: '/brand/system/workflow' },
          { text: '决定与原稿', link: '/brand/system/replay' },
          { text: '生活主理人企划原稿', link: '/brand/life-curator-plan' },
          { text: '资产入口', link: '/assets/' },
          { text: '本地预览', link: '/guide/getting-started' },
          { text: '如何维护', link: '/guide/contributing' },
        ],
      },
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/SebsPresso/project-pig-brand',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/SebsPresso/project-pig-brand/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Project Pig brand documentation · Working system',
    },
  },
})
