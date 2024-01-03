import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: 'Enter box values',
    type: 'Enum',
    options: ['String', 'Number'],
    default: '---',
  },
  {
    name: 'disabled',
    description: 'Disabled state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    description: 'Empty with one click',
    type: 'String',
    default: '---',
  },
  {
    name: 'prefixIcon',
    description: 'Prefix icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'suffixIcon',
    description: 'Suffix icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'type',
    description: 'Type of input box',
    type: 'Enum',
    options: ['text', 'password', 'textarea', 'number'],
    default: 'text',
  },
]

export default list
