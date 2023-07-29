import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code'
import { head, nav, sidebar, vite } from './configuration'

export default defineConfig({
  title: 'Fusion Ui',
  base: '/fusion-ui/',
  description:
    'A Vue.js prebuilt component library based on Preline design draft',
  head,
  // darkMode: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/tsinghua-lau/fusion-ui/edit/master/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsinghua-lau/fusion-ui' },
    ],
    sidebar,
    algolia: {
      appId: 'GA7O5T77G8',
      apiKey: '72bff662ff8ae89b474533380c73890c',
      indexName: 'fusion-ui',
      container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      debug: false, // Set debug to true if you want to inspect the modal
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
  // lastUpdated: true,
  vite,
} as UserConfig)
