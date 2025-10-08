import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({


  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Kaspa 知识库',
      description: ' ',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kaspa Knowledge Base',
      description: ' ',
    }
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
            text: 'Kaspa 纪事',
            link: '/kas-timeline/'
          },
          {
            text: 'Kaspa 论文',
            link: '/kas-theory/'
          },
          {
            text: 'Kaspa 问题',
            link: '/kas-discussion/'
          },
          {
            text: 'Kaspa 资源',
            link: '/kas-resource/'
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

          '/kas-timeline/': [
            {
              children: [
                '2021-2024.md',
                '2025.md',
              ]
            }
          ],

          '/kas-theory/': [
            {
              children: [
                'Theory.md',
                'CoreTeam.md',
                'AboutYonatan.md',
              ]
            }
          ],

          '/kas-discussion/': [
            {
              children: [
                'Fee.md',
                'OldTrxHistory.md',
                'TrxInBlock.md',
              ]
            }
          ],
          '/kas-resource/': [
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
          '/the-blockchain-trilemma/': [
            {
              children: [
                'README.md'
              ]
            }
          ],
          '/btc/': [
            {
              children: [
                'README.md'
              ]
            }
          ],
          '/eth/': [
            {
              children: [
                'README.md'
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
