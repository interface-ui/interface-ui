import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'open',
    description: '控制对话框的可见性',
    type: 'boolean',
  },

  {
    name: 'variant',
    description: '提供的变体',
    type: 'Enum',
    options: ['base', 'full-screen'],
    default: 'base',
  },
  {
    name: 'backdrop',
    description: '组件蒙层',
    type: 'Boolean',
    default: 'false',
  },

  {
    name: 'cs',
    description: '覆盖组件默认样式的prop',
    type: 'string | object',
  },
]

export default list
