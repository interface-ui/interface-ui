import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: 'Enter box values',
    type: 'Enum',
    optional: ['String', 'Number'],
    default: '---',
  },
  {
    name: 'disabled',
    remark: 'Disabled state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    remark: 'Empty with one click',
    type: 'String',
    default: '---',
  },
  {
    name: 'prefixIcon',
    remark: 'Prefix icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'suffixIcon',
    remark: 'Suffix icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'type',
    remark: 'Type of input box',
    type: 'Enum',
    optional: ['text', 'password', 'textarea', 'number'],
    default: 'text',
  },
]

export default list
