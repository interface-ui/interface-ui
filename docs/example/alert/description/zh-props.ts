import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'title',
    remark: 'Alert 标题',
    type: 'String',
    default: '---',
  },
  {
    name: 'type',
    remark: 'Alert 类型',
    type: 'Enum',
    optional: ['info', 'success', 'danger', 'warning'],
    default: 'info',
  },
  {
    name: 'closable',
    remark: '是否可以关闭',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'center',
    remark: '文字是否居中',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'scrollable',
    remark: '开启滚动',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'direction',
    remark: '滚动方向',
    type: 'Enum',
    optional: ['left', 'top'],
    default: 'left',
  },
]

export default list
