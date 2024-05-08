import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { applyPlugins } from './plugins/code'
import { head, nav, sidebar, vite } from './configuration'

export default defineConfig({
  title: 'Interface UI',
  base: '/interface-ui/',
  description: 'A Vue.js prebuilt component library based on Material Design.',
  head,
  // darkMode: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern:
        'https://github.com/tsinghua-lau/fusion-ui/edit/master/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsinghua-lau/fusion-ui' },
    ],
    sidebar,
    outline: {
      level: 'deep',
    },
    algolia: {
      appId: 'TFYJWXKDHM',
      apiKey: '51d561bc4082437c0557017cbb8c9733',
      indexName: 'interface-uiio',
      insights: true,
      container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      debug: false, // Set debug to true if you want to inspect the modal
    },
    footer: {
      message: 'MIT Licensed',
      copyright:
        'Copyright © 2023-present tsinghua-lau & Interface UI Contributors',
    },
  },
  markdown: {
    config: md => {
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
} as any as UserConfig)
