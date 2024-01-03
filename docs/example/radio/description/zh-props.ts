import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model',
    description: '绑定的值',
    type: 'Enum',
    options: ['string', 'number'],
    default: 'default',
  },
  {
    name: 'size',
    description: '单选框尺寸',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: '自定义单选框颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
]

export default list
