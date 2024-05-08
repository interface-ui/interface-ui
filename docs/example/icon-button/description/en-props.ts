import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: 'Button size',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
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
