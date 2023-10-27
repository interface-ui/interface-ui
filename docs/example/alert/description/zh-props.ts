import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'severity',
    remark: 'Alert Severe level',
    type: 'Enum',
    optional: ['error', 'warning', 'info', 'success'],
    default: '---',
  },
  {
    name: 'fn-typography',
    remark: 'Provide title style',
    type: '--',
    default: '--',
  },
  {
    name: 'icon',
    remark: 'Provide the icon, icon is false to close the icon',
    type: 'String',
    default: '---',
  },

  {
    name: 'variant',
    remark: '提供 outlined 与 filled 样式',
    type: 'String',
    default: '---',
  },
]

export default list
