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
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    description: '禁用状态',
    type: 'boolean',
    default: 'false%',
  },
  {
    name: 'color',
    description: '颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
  },
  {
    name: 'deletable',
    description: '颜色',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
