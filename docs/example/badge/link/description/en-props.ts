import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: 'Set the link type',
    type: 'Enum',
    optional: ['primary', 'success', 'warning', 'danger', 'info', 'default'],
    default: 'default',
  },
  {
    name: 'disabled',
    remark: 'Set the link as disabled',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'href',
    remark: 'Native href attribute',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: 'Icon component',
    type: 'String',
    default: '---',
  },
  { name: 'underline', remark: 'underline', type: 'Boolean', default: 'false' },
]

export default list
