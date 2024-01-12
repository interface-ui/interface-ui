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
    name: 'color',
    description: 'color',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'secondary',
  },
  {
    name: 'component',
    description: 'The component/html tag to render the chip as',
    type: 'string | Component',
    default: 'span',
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
    default: 'false',
  },
  {
    name: 'deletable',
    description: 'deletable status',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
