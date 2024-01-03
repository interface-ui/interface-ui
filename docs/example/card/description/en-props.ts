import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'header',
    description: 'card header content',
    type: 'string',
    default: '"card-header"',
  },
  {
    name: 'border',
    description: 'card border',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'hover',
    description: 'hover effect',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'background',
    description: 'card background',
    type: 'string',
    default: '',
  },
  {
    name: 'width',
    description: 'card width',
    type: 'number',
    default: '300',
  },
]

export default list
