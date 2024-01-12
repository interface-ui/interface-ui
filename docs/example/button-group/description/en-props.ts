import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Button variant',
    type: 'string',
    options: ['text', 'filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'size',
    description: 'Button size',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'shape',
    description: 'Button shape',
    type: 'string',
    options: ['rounded', 'fullRounded', 'square'],
    default: 'rounded',
  },
  {
    name: 'color',
    description: 'Customize the color of buttons',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    description: 'Disable the ripple effect',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'orientation',
    description: 'Arrangement direction of buttons',
    type: 'string',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
