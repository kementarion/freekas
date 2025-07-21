import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  
  base: "/",

  title: 'Kaspa 笔记',
  description: ' ',

  head: [
    ['link', { 
      rel: 'icon', 
      type: 'image/webp',
      href: '/logo/Kaspa-Icon-32.webp',
      sizes: '32x32'
    }]
  ],

  theme: defaultTheme({
    logo: '/logo/Kaspa-Icon-Dark-Green-on-White.svg',

    colorMode: 'auto',


    contributors: false,

    sidebarDepth: 4,

    lastUpdated: false,

    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Kaspa 重要事件',
        link: '/kas-timeline/'
      },
      {
        text: 'Kaspa 理论背景',
        link: '/kas-theory/'
      },
      {
        text: 'Kaspa 问题讨论',
        link: '/kas-discussion/'
      },
      {
        text: 'Kaspa 常用资源',
        link: '/kas-resource/'
      },
      {
        text: '加密货币之名词与概念',
        link: '/crypto/'
      },
      {
        text: '区块链三难困境',
        link: '/the-blockchain-trilemma/'
      },
      {
        text: '比特币简介',
        link: '/btc/'
      },
      {
        text: '以太坊简介',
        link: '/eth/'
      }
    ],



  }),

  bundler: viteBundler(),
})
