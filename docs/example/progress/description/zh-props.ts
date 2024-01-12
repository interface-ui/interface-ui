import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '进度条变体',
    type: 'string',
    options: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    description: '进度条状态',
    type: 'string',
    options: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    description: '进度条百分比',
    type: 'string | number',
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
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
