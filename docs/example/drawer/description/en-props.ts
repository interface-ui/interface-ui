import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: 'Enter box values',
    type: 'Enum',
    options: ['String', 'Number'],
  },
  {
    name: 'disabled',
    description: 'Disabled state',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    description: 'Empty with one click',
    type: 'string',
  },
  {
    name: 'prefixIcon',
    description: 'Prefix icon',
    type: 'string',
  },
  {
    name: 'suffixIcon',
    description: 'Suffix icon',
    type: 'string',
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
