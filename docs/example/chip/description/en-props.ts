import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: 'Chip variant',
    type: 'Enum',
    optional: ['filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'clickable',
    remark: 'clickable status',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    remark: 'disabled status',
    type: 'Boolean',
    default: 'false%',
  },
  {
    name: 'color',
    remark: 'color',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: '---',
  },
  {
    name: 'deletable',
    remark: 'deletable status',
    type: 'Boolean',
    default: 'false',
  },

]

export default list
