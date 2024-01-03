import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: '悬浮按钮大小',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: '自定义悬浮按钮颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primaryContainer',
  },
  {
    name: 'cs',
    description: '灵活的css配置',
    type: 'Enum',
    options: ['String', 'Object'],
    default: '--',
  },
]

export default list
