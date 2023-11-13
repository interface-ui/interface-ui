import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'size',
    remark: '悬浮按钮大小',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: '自定义悬浮按钮颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primaryContainer',
  },
  {
    name: 'cs',
    remark: '灵活的css配置',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },
]

export default list
