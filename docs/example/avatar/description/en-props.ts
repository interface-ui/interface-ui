import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'src',
    remark: 'The source address of the picture',
    type: 'String',
    default: '---',
  },
  {
    name: 'size',
    remark: 'size',
    type: 'Enum',
    optional: ['small', 'default', 'large'],
    default: '---',
  },
  {
    name: 'width',
    remark: 'width',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'height',
    remark: 'height',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'color',
    remark: 'Text color',
    type: 'String',
    default: 'white',
  },
  {
    name: 'background',
    remark: 'background color',
    type: 'String',
    default: '---',
  },
  {
    name: 'shape',
    remark: 'shape',
    type: 'Enum',
    optional: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
  {
    name: 'max',
    remark: 'Limit the number of avatars',
    type: 'String/Number',
    default: '5',
  },
  {
    name: 'total',
    remark: 'Control the number of avatars that are not displayed',
    type: 'String/Number',
    default: '0',
  },
]

export default list
