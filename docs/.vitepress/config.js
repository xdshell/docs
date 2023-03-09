export default {
  base: '/docs/',
  themeConfig: {
    siteTitle: '🎉 This is Xdsh ~',
    nav: [
      { text: 'Guide', link: '/guide/什么是-Xdsh-？' },
      { text: 'Demo', link: 'https://xdshell.github.io/xdsh/'},
      { text: 'Changelog', link: 'https://github.com/xdshell/xdsh/blob/main/CHANGELOG.md' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xdshell' },
      {
        icon: {
          svg: `<svg t="1677897455996" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3111" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="3112"></path></svg>`
        },
        link: 'https://space.bilibili.com/434618849'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '什么是 Xdsh ？', link: '/guide/什么是-Xdsh-？' },
          ]
        },
        {
          text: '演示文档',
          collapsed: false,
          items: [
            { text: '演示文档', link: '/guide/演示文档' },
          ]
        },
        {
          text: '开发',
          collapsed: false,
          items: [
            { text: '开发', link: '/guide/开发' },
          ]
        },
        {
          text: '未来计划',
          collapsed: false,
          items: [
            { text: '未来计划', link: '/guide/未来计划' },
          ]
        }
      ],
      lastUpdated: true,
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present insorker'
      },
    }
  }
}