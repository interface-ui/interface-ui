import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'title',
    description: 'Alert 标题',
    type: 'string',
  },
  {
    name: 'type',
    description: 'Alert 类型',
    type: 'Enum',
    options: ['info', 'success', 'danger', 'warning'],
    default: 'info',
  },
  {
    name: 'closable',
    description: '是否可以关闭',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'center',
    description: '文字是否居中',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'scrollable',
    description: '开启滚动',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'direction',
    description: '滚动方向',
    type: 'Enum',
    options: ['left', 'top'],
    default: 'left',
  },
]

export default list
