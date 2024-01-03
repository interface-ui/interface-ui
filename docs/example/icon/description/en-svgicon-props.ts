import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: 'Icon size',
    type: 'String | Number',
    default: 'inherit',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'inherit',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'TemplateStringsArray',
  },
  {
    name: 'component',
    description: 'The component to render the icon',
    type: 'String | Component',
    default: 'svg',
  },
]

export default list
