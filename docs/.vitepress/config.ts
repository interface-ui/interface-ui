import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code'
import { head, nav, sidebar, vite } from './configuration'

export default defineConfig({
  title: 'Fusion Ui',
  outDir: './dist',

  description:
    'A Vue.js prebuilt component library based on Preline design draft',
  head,
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/tsinghua-lau/Fusion-Ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsinghua-lau/Fusion-Ui' },
    ],
    sidebar,
    algolia: {
      appId: '8MY90XETI9',
      apiKey: '636f709b1d37514bd8893154430045c0',
      indexName: 'fusion-ui',
    },
    footer: {
      message: 'MIT Licensed',
      copyright:
        'Copyright © 2023-present tsinghua-lau & Fusion UI Contributors',
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/langs/en/',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/langs/zh/',
    },
  },
  lastUpdated: true,
  vite,
} as UserConfig)
