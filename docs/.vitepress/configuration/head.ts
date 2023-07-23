import type { HeadConfig } from 'vitepress'

export const head = [
  ['meta', { property: 'og:title', content: 'Fusion UI' }],
  [
    'meta',
    {
      property: 'og:description',
      content:
        'A Vue.js prebuilt component library based on Preline design draft',
    },
  ],
  [
    'meta',
    {
      property: 'og:url',
      content: 'https://github.com/tsinghua-lau/fusion-ui',
    },
  ],
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  [
    'link',
    {
      href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap',
      rel: 'stylesheet',
    },
  ],
  [
    'link',
    {
      href: 'https://gw.alipayobjects.com/os/k/font/lxgwwenkaiscreenr.css',
      rel: 'stylesheet',
    },
  ],
] as HeadConfig[]
