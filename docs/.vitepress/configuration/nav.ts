// import { version } from '../../../package.json'
import { enComponents, zhComponents } from './components'
import { enTheme } from './theme'
import { enGuides, zhGuides } from './guides'

export const nav = {
  en: [
    { text: 'Guide', items: enGuides },
    { text: 'Components', items: enComponents },
    { text: 'Theme', items: enTheme },
    { text: 'Playground', link: '/playground', target: '_blank', },
    // {
    //   text: `v${version}`,
    //   items: [
    //     {
    //       text: 'Release Notes',
    //       link: 'https://github.com/tsinghua-lau/fusion-ui/releases',
    //     },
    //   ],
    // },
  ],
  zh: [
    { text: '指南', items: zhGuides },
    { text: '组件', items: zhComponents },
    { text: '游乐场', link: '/playground', target: '_blank' },
    // {
    //   text: `v${version}`,
    //   items: [
    //     {
    //       text: '发布说明',
    //       link: 'https://github.com/tsinghua-lau/fusion-ui/releases',
    //     },
    //   ],
    // },
  ],
}
