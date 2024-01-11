import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'img attrs',
    description: '支持所有 img 标签的属性',
    type: '-',
  },
  {
    name: 'size',
    description: '头像的大小',
    type: 'string | number',
    default: '40',
  },
  {
    name: 'color',
    description: '头像的背景色',
    type: 'AcceptableColor',
    default: 'surfaceVariant',
  },
  {
    name: 'variant',
    description: '头像的形状',
    type: 'string',
    options: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
