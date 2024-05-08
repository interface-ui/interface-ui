import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '卡片变体',
    type: 'string',
    options: ['elevated', 'filled', 'outlined'],
    default: 'elevated',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
