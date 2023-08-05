import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'state',
    remark: 'message status',
    type: 'Enum',
    optional: ['info', 'success', 'warning', 'danger'],
    default: 'info',
  },
  {
    name: 'duration',
    remark: 'delay in closing',
    type: 'Number',
    default: '2s',
  },
  {
    name: 'closeBtn',
    remark: 'show the close button',
    type: 'Boolean',
    default: 'normal',
  },
  {
    name: 'showIcon',
    remark: 'display icon',
    type: 'Boolean',
    default: 'round',
  },
]

export default list
