import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Progress variants',
    type: 'string',
    options: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    description: 'Progress bar status representation',
    type: 'string',
    options: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    description: 'Percentage of the progress indicator',
    type: 'string | number',
  },
  {
    name: 'color',
    description: 'Customize the color of indicator',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
