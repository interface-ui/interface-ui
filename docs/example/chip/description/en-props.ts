import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Chip variant',
    type: 'Enum',
    options: ['filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'clickable',
    description: 'clickable status',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    description: 'disabled status',
    type: 'boolean',
    default: 'false%',
  },
  {
    name: 'color',
    description: 'color',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
  },
  {
    name: 'deletable',
    description: 'deletable status',
    type: 'boolean',
    default: 'false',
  },
]

export default list
