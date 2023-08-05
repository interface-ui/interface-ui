import { version } from '../../../packages/fusion-ui/package.json'
import { enComponents, zhComponents } from './components'
import { enGuides, zhGuides } from './guides'

export const nav = {
  en: [
    { text: 'Guide', items: enGuides },
    { text: 'Components', items: enComponents },
    {
      text: `v${version}`,
      tems: [
        {
          text: 'Release Notes',
          link: 'https://github.com/tsinghua-lau/fusion-ui/releases',
        },
      ],
    },
  ],
  zh: [
    { text: '指南', items: zhGuides },
    { text: '组件', items: zhComponents },
    {
      text: `v${version}`,
      items: [
        {
          text: '发布说明',
          link: 'https://github.com/tsinghua-lau/fusion-ui/releases',
        },
      ],
    },
  ],
}
