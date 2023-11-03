import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'size',
    remark: '图标尺寸',
    type: 'String | Number',
    default: 'inherit',
  },
  {
    name: 'color',
    remark: '图标颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'inherit',
  },
  {
    name: 'cs',
    remark: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
  {
    name: 'component',
    remark: '渲染的组件',
    type: 'String | Component',
    default: 'svg',
  },
]

export default list
