import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: 'Binding value',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    remark: 'Disabled state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    remark: 'Custom color',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    remark: 'size',
    type: 'Enum',
    optional: ['medium', 'small'],
    default: 'medium',
  },
]

export default list
