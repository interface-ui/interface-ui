import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: 'Binding value',
    type: 'boolean',
  },
  {
    name: 'size',
    description: 'Switch size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: 'Customize the color of switches',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'disabledIcon',
    description: 'Hide the icon in checked state',
    type: 'boolean',
    default: 'false',
  },
]

export default list
