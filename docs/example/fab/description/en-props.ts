import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'size',
    remark: 'FBA size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: 'Customize the color of FBAs',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primaryContainer',
  },
  {
    name: 'cs',
    remark: 'Flexible css configuration',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },
]

export default list
