import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: 'FBA size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'Customize the color of FBAs',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primaryContainer',
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
