import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: 'Icon size',
    type: 'string | number',
    default: 'inherit',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'inherit',
  },
  {
    name: 'component',
    description: 'The component to render the icon',
    type: 'string | Component',
    default: 'svg',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
