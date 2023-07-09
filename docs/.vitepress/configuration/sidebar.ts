import { enComponents, zhComponents } from './components'
import { enGuides, zhGuides } from './guides'

export const sidebar = {
  '/langs/zh/guide': [
    {
      text: '开发者指南',
      items: zhGuides,
    },
  ],
  '/langs/zh/components': zhComponents,
  '/langs/en/guide': [
    {
      text: 'Developer Guide',
      items: enGuides,
    },
  ],
  '/langs/en/components': enComponents,
}
