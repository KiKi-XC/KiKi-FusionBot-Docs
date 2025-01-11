import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '基于Python打造的全功能Mc机器人',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/KiKi-XC/KiKi-FusionBot-Docs/tree/main/src:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '快速开始',
      link: '/guide/doc_start',
      activeMatch: '/guide/'
    },
    {
      text: '关于',
      link: '/other/about',
      activeMatch: '/other/about'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    {
      text: '快速开始',
      base: '/guide',
      collapsed: true,
      items: [
        { text: '目录导航', link: '/doc_start' },
        { text: '什么是 KiKi-FusionBot', link: '/kiki_fusionbot' },
        { text: '有什么用', link: '/avail' },
        {  text: '用了什么技术', link: '/techstack' },
      ]
    },
    {
      text: '使用教程',
      base: '/course',
      collapsed: true,
      items: [
        {
          text: '命令使用指南',
          base: '/course/command',
          collapsed: false,
          items: [
            { text: '玩家命令', link: '/user_command.md' },
            { text: '管理员命令', link: '/op_command.md' },
          ]
        },
        { text: '常见问题解决', link: '/faq' },
        { text: '细节与特性', link: '/features'}
      ]
    },
    {
      text: '二次开发',
      base: '/develop',
      collapsed: true,
      items: [
        { text: 'Token申请', link: '/token' },
        { text: '请求接口', link: '/api' },
        { text: '上报事件', link: '/event' },
        {
          text: '模块用法',
          base: '/develop/models',
          collapsed: false,
          items: [
            { text: 'Get Skin', link: '/get_skin.md' },
          ]
        }
      ]
    },
    {
      text: '乱七八糟',
      base: '/other',
      collapsed: true,
      items: [
        {
          text: 'KiKiKiKiKiKiKiKiKi',
        },
        {
          text: '关于',
          link: '/about'
        }
      ]
    },
  ]
}
