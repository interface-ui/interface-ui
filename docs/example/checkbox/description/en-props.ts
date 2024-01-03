import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model',
    description: 'Binding value',
    type: 'Boolean|Array',
    default: '---',
  },
  {
    name: 'size',
    description: 'checkBox size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'checkBox Color',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'label',
    description: 'Label',
    type: 'string',
    default: '---',
  },
  {
    name: 'disabled',
    description: 'Disabled state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'TemplateStringsArray',
  },
]

export default list
