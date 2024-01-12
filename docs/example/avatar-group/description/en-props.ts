import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'img attrs',
    description: 'All attributes of the img tag',
    type: '-',
  },
  {
    name: 'size',
    description: 'The size of the avatar',
    type: 'string | number',
    default: '40',
  },
  {
    name: 'color',
    description: 'The background color of the avatar',
    type: 'AcceptableColor',
    default: 'surfaceVariant',
  },
  {
    name: 'variant',
    description: 'The shape of the avatar',
    type: 'string',
    options: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
  {
    name: 'max',
    description: 'The maximum number of avatars to display',
    type: 'string | number',
    default: 'Infinity',
  },
  {
    name: 'avatar-border',
    description: 'The border color of the avatar',
    type: 'string',
    default: 'background',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
