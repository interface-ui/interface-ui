import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: '链接类型',
    type: 'Enum',
    optional: ['primary', 'success', 'warning', 'danger', 'info', 'default'],
    default: 'default',
  },
  {
    name: 'disabled',
    remark: '设置链接禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'href',
    remark: '原生 href 属性',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: '图标按钮',
    type: 'String',
    default: '---',
  },
  { name: 'underline', remark: '下划线', type: 'Boolean', default: 'false' },
]

export default list
