import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: 'Binding value',
    type: 'string',
  },
  {
    name: 'variant',
    description: 'Component variant',
    type: 'string',
    options: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'Label',
    description: 'Form control label',
    type: 'string',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'size',
    description: 'Button size',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    description: 'Error state',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    description: 'Supporting text',
    type: 'string',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
