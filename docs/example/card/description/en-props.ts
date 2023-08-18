import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'header',
    remark: 'card header content',
    type: 'string',
    default: '"card-header"',
  },
  {
    name: 'border',
    remark: 'card border',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'hover',
    remark: 'hover effect',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'background',
    remark: 'card background',
    type: 'string',
    default: '',
  },
  {
    name: 'width',
    remark: 'card width',
    type: 'number',
    default: '300',
  },
]

export default list
