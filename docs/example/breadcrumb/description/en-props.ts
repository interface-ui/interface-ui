import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'separator',
    remark: 'separator',
    type: 'String | Component',
    default: '/',
  },
  {
    name: 'color',
    remark: 'link color',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'underline',
    remark: 'underline style',
    type: 'Enum',
    optional: ['none', 'hover', 'always'],
    default: 'hover',
  },
  {
    name: 'max',
    remark: 'max cound to show',
    type: 'String | Number',
    default: '--',
  },
  {
    name: 'cs',
    remark: 'Flexible css configuration',
    type: 'String | Object',
    default: '--',
  },
]

export default list
