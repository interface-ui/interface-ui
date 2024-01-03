import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: 'Binding value',
    type: 'String',
    default: '---',
  },
  {
    name: 'variant',
    description: 'Component variant',
    type: 'Enum',
    options: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'Label',
    description: 'Form control label',
    type: 'String',
    default: '---',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    description: 'Button size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    description: 'Error state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    description: 'Supporting text',
    type: 'String',
    default: '---',
  },
]

export default list
