import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'state',
    remark: '消息状态',
    type: 'Enum',
    optional: ['info', 'success', 'warning', 'danger'],
    default: 'info',
  },
  {
    name: 'duration',
    remark: '关闭延时',
    type: 'Number',
    default: '2s',
  },
  {
    name: 'closeBtn',
    remark: '显示关闭按钮',
    type: 'Boolean',
    default: 'normal',
  },
  {
    name: 'showIcon',
    remark: '显示图标',
    type: 'Boolean',
    default: 'round',
  },
]

export default list
