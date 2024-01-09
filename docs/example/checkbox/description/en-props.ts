import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model',
    description: 'Binding value',
    type: 'Boolean|Array',
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
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'label',
    description: 'Label',
    type: 'string',
  },
  {
    name: 'disabled',
    description: 'Disabled state',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'TemplateStringsArray',
  },
]

export default list
