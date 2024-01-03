import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Button variant',
    type: 'Enum',
    options: ['text', 'filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'size',
    description: 'Button size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'shape',
    description: 'Button shape',
    type: 'Enum',
    options: ['rounded', 'fullRounded', 'square'],
    default: 'rounded',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    description: 'Disable the ripple effect',
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
