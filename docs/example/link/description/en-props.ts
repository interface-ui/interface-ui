import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'link attrs',
    description: 'All the attributes of the <a /> tag (href, target, etc.)',
    type: '-',
  },
  {
    name: 'color',
    description: 'color',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: '-',
  },
  {
    name: 'underline',
    description: 'underline',
    default: 'hover',
    type: 'string',
    options: ['hover', 'none', 'always'],
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
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
