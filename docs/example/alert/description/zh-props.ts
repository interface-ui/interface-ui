import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'severity',
    remark: 'Alert 严重等级',
    type: 'Enum',
    optional: ['error', 'warning', 'info', 'success'],
    default: 'info',
  },
  {
    name: 'fn-typography',
    remark: '提供标题样式',
    type: '--',
    default: '--',
  },

  {
    name: 'variant',
    remark: '提供 filled 与 outlined 样式',
    type: 'String',
    default: 'filled',
  },
  {
    name: 'cs',
    remark: '灵活的颜色配置',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },

]

export default list
