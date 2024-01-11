import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '进度条变体',
    type: 'Enum',
    options: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    description: '进度条状态',
    type: 'Enum',
    options: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    description: '进度条百分比',
    type: 'Number | String',
  },
  {
    name: 'color',
    description: '自定义进度条颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'cs',
    description: 'Flexible css configuration',
    type: 'Enum',
    options: ['String', 'Object'],
    default: '-',
  },
]

export default list
