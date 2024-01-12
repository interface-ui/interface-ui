import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'content',
    description: 'Badge content',
    type: 'string | number | Component',
  },
  {
    name: 'variant',
    description: 'Badge variant, when variant is dot, the content is ignored',
    type: 'string',
    options: ['dot', 'content'],
  },
  {
    name: 'color',
    description: 'Customize the color of badge background',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'error',
  },
  {
    name: 'max',
    description: 'The maximum value displayed',
    type: 'string | number',
  },
  {
    name: 'overlap',
    description: 'Whether to overlap the badge on the wrapped component',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'x-align',
    description: 'The horizontal alignment of the badge',
    type: 'string',
    options: ['left', 'right'],
  },
  {
    name: 'y-align',
    description: 'The vertical alignment of the badge',
    type: 'string',
    options: ['top', 'bottom'],
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
