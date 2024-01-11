import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'color',
    description: 'color',
    default: '-',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
  },
  {
    name: 'underline',
    description: 'underline',
    default: 'hover',
    type: 'Enum',
    options: ['hover', 'none', 'always'],
  },
  {
    name: 'href',
    description: 'Native href attribute',
    type: 'string',
  },
  {
    name: 'icon',
    description: 'Icon component',
    type: 'string',
  },
  {
    name: 'underline',
    description: 'underline',
    type: 'boolean',
    default: 'false',
  },
]

export default list
