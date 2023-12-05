import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'v-model',
    remark: 'Binding value',
    type: 'Boolean|Array',
    default: '---',
  },
  {
    name: 'size',
    remark: 'checkBox size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: 'checkBox Color',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'label',
    remark: 'Label',
    type: 'string',
    default: '---',
  },
  {
    name: 'disabled',
    remark: 'Disabled state',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
