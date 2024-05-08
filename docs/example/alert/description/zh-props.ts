import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'severity',
    description: 'Alert 严重等级',
    type: 'Enum',
    options: ['error', 'warning', 'info', 'success'],
    default: 'info',
  },
  {
    name: 'in-typography',
    description: '提供标题样式',
    type: '--',
    default: '-',
  },

  {
    name: 'variant',
    description: '提供 filled 与 outlined 样式',
    type: 'string',
    default: 'filled',
  },
  {
    name: 'cs',
    description: '灵活的css配置',
    type: 'Enum',
    options: ['String', 'Object'],
    default: '-',
  },
]

export default list
