import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model / modelValue',
    description: 'Binding value',
    type: 'string | number | boolean',
  },
  {
    name: 'size',
    description: 'Radio size',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'Customize the color of radios',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
