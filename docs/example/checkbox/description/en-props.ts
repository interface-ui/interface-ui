import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model / modelValue',
    description: 'Binding value',
    type: 'boolean | string | Set<string>',
  },
  {
    name: 'size',
    description: 'checkBox size',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'checkBox Color',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
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
    type: 'string | object',
  },
]

export default list
