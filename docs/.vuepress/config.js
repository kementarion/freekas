import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({


  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Kaspa 百科文档',
      description: ' ',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Kaspa Knowledge Base',
    //   description: ' ',
    // }
  },

  
  base: "/",

  // lang: 'zh-CN',
  // title: 'Kaspa 知识库',
  // description: ' ',

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

    colorMode: 'light',


    locales: {
      '/': {
        selectLanguageName: '中文',
        selectLanguageText: 'Language',
        lastUpdatedText: '最近更新',
        navbar: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: 'Kaspa 简介',
            link: '/summary/'
          },
          {
            text: 'Kaspa 理论',
            link: '/theory/'
          },
          {
            text: 'Kaspa 团队',
            link: '/team/'
          },
          {
            text: 'Kaspa 纪事',
            link: '/timeline/'
          },
          {
            text: 'Kaspa 话题',
            link: '/topic/'
          },

          {
            text: '加密货币基础知识',
            link: '/crypto/'
          },
          {
            text: '关于',
            link: '/about/'
          }
        ],

        sidebar: {

          '/summary/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/timeline/': [
            {
              children: [
                '2021-2024.md',
                '2025.md',
              ]
            }
          ],

          '/theory/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/team/': [
            {
              children: [
                'README.md',
              ]
            }
          ],

          '/topic/': [
            {
              children: [
                'Fee.md',
                'OldTrxHistory.md',
                'TrxInBlock.md',
                'OriNewmanInterviewByXXIM.md',
              ]
            }
          ],
          '/resource/': [
            {
              children: [
                'README.md'
              ]
            }
          ],

          '/crypto/': [
            {
              children: [
                'Basic-Knowledge.md',
                'PoW-PoS.md',
                'The-BlockChain-Trilemma.md',
                'Node-And-Miner.md',
                'BTC.md',
                'ETH.md',
              ]
            }
          ],


          '/about/': [
            {
              children: [
              ]
            }
          ]
        }
      },



      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: '切换语言',
        lastUpdatedText: 'Last Update',
        navbar: [
          {
            text: 'Home',
            link: '/en/'
          },
          {
            text: 'Q&A',
            link: '/en/qa/'
          },
        ],

        sidebar: {

          '/en/': [
            {
              children: [
              ]
            }
          ],

          '/en/qa/': [
            {
              children: [
                'TrxInBlock_EN.md',
              ]
            }
          ],
      },
    }},



    contributors: false,

    sidebarDepth: 4,

    lastUpdated: true,





  }),

  bundler: viteBundler(),


})
