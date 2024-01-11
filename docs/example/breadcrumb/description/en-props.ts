import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'separator',
    description: 'separator',
    type: 'String | Component',
    default: '/',
  },
  {
    name: 'color',
    description: 'link color',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'underline',
    description: 'underline style',
    type: 'Enum',
    options: ['none', 'hover', 'always'],
    default: 'hover',
  },
  {
    name: 'max',
    description: 'max cound to show',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'cs',
    description: 'Flexible css configuration',
    type: 'String | Object',
    default: '-',
  },
]

export default list
