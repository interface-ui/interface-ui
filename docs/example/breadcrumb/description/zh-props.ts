import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'separator',
    remark: '分隔符',
    type: 'String | Component',
    default: '/',
  },
  {
    name: 'color',
    remark: '链接颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'underline',
    remark: '下划线样式',
    type: 'Enum',
    optional: ['none', 'hover', 'always'],
    default: 'hover',
  },
  {
    name: 'max',
    remark: '渲染的最大数量',
    type: 'String | Number',
    default: '--',
  },
  {
    name: 'cs',
    remark: '配置Css',
    type: 'String | Object',
    default: '--',
  },
]

export default list
