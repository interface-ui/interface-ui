import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: 'Binding value',
    type: 'Boolean',
    default: '---',
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
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disabledIcon',
    description: 'Hide the icon in checked state',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
