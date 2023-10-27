import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'severity',
    remark: 'Alert 严重等级',
    type: 'Enum',
    optional: ['error', 'warning', 'info', 'success'],
    default: '---',
  },
  {
    name: 'fn-typography',
    remark: '提供标题样式',
    type: '--',
    default: '--',
  },
  {
    name: 'icon',
    remark: '提供图标，icon 为 false 关闭图标',
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
