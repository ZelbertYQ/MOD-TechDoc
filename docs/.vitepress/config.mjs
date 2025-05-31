import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'MOD教程文档',
  description: 'A VitePress Site',
  base: '/MOD-TechDoc/', // 部署路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '重置搜索',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '快速指南', link: '/快速指南/本站说明' },
      { text: '环境配置', link: '/setup/play-environment' },
      { text: '基础MOD教程', link: '/basic-dev/software-management' },
      { text: '进阶MOD教程', link: '/advanced-dev/config-file' },
      { text: '未归档', link: '/placeholder/placeholder' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '快速指南',
        items: [
          { text: '本站说明', link: '/快速指南/本站说明' },
          { text: '使用方法', link: '/快速指南/使用方法' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZelbertYQ/MOD-TechDoc' }
    ],

    // 本地化翻译字段（直接放在 themeConfig 中）
    editLink: {
      text: '编辑此页',
      pattern: 'https://github.com/ZelbertYQ/MOD-TechDoc/edit/main/docs/:path'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    notFound: {
      title: '页面未找到',
      quote: '抱歉，页面不存在。',
      linkText: '返回主页'
    },
    outlineTitle: '页面导航',
    //页脚
    footer: {
      message: '不辨真伪，勿论虚实',
      copyright: '囿于求知，身陷囹吾'
    }
  }
})