import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model',
    description: 'Enter box values',
    type: 'Enum',
    options: ['string', 'number'],
    default: 'default',
  },
  {
    name: 'size',
    description: 'Radio size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'Customize the color of radios',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
]

export default list
