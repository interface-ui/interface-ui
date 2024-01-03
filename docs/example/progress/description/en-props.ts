import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Progress variants',
    type: 'Enum',
    options: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    description: 'Progress bar status representation',
    type: 'Enum',
    options: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    description: 'Percentage of the progress indicator',
    type: 'Number | String',
    default: '---',
  },
  {
    name: 'color',
    description: 'Customize the color of indicator',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
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
