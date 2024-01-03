import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'src',
    description: 'The source address of the picture',
    type: 'String',
    default: '---',
  },
  {
    name: 'size',
    description: 'size',
    type: 'Enum',
    options: ['small', 'default', 'large'],
    default: '---',
  },
  {
    name: 'width',
    description: 'width',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'height',
    description: 'height',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'color',
    description: 'Text color',
    type: 'String',
    default: 'white',
  },
  {
    name: 'background',
    description: 'background color',
    type: 'String',
    default: '---',
  },
  {
    name: 'shape',
    description: 'shape',
    type: 'Enum',
    options: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
  {
    name: 'max',
    description: 'Limit the number of avatars',
    type: 'String/Number',
    default: '5',
  },
  {
    name: 'total',
    description: 'Control the number of avatars that are not displayed',
    type: 'String/Number',
    default: '0',
  },
]

export default list
