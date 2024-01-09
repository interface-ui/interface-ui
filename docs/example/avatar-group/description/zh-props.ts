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
    name: 'max',
    description: '最多显示的头像数量',
    type: 'string | number',
    default: 'Infinity',
  },
  {
    name: 'avatar-border',
    description: '头像的边框颜色',
    type: 'string',
    default: 'background',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
]

export default list
