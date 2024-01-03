import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'color',
    description: 'color',
    default: '--',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
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
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    description: 'Icon component',
    type: 'String',
    default: '---',
  },
  {
    name: 'underline',
    description: 'underline',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
