import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'severity',
    description: 'Alert Severe level',
    type: 'Enum',
    options: ['error', 'warning', 'info', 'success'],
    default: '---',
  },
  {
    name: 'in-typography',
    description: 'Provide title style',
    type: '--',
    default: '--',
  },

  {
    name: 'variant',
    description: ' outlined & filled ',
    type: 'String',
    default: '---',
  },
  {
    name: 'cs',
    description: 'Flexible css configuration',
    type: 'Enum',
    options: ['String', 'Object'],
    default: '--',
  },
]

export default list
