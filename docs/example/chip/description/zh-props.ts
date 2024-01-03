import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '变体',
    type: 'Enum',
    options: ['filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'clickable',
    description: '可点击状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    description: '禁用状态',
    type: 'Boolean',
    default: 'false%',
  },
  {
    name: 'color',
    description: '颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: '---',
  },
  {
    name: 'deletable',
    description: '颜色',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
