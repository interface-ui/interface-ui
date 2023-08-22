import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: 'type of Tag',
    type: 'Enum',
    optional: ['success', 'info', 'warning','danger'],
    default: '',
  },
  {
    name: 'size',
    remark: 'size of Tag',
    type: 'Enum',
    optional: [ 'small', 'large'],
    default: '',
  },
  {
    name: 'closable',
    remark: 'whether Tag can be removed',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'round',
    remark: '	whether Tag is rounded',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    remark: 'color of the Tag',
    type: 'String',
    default: '-',
  },
]

export default list
