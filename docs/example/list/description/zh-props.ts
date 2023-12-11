import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'component',
    remark: '颜色',
    default: '--',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
  },
  {
    name: 'background',
    remark: '背景颜色',
    default: 'surface',
    type: 'String｜Function',

  },
  {
    name: 'level',
    remark: '原生 href 属性',
    type: 'String',
    default: '---',
  },
  {
    name: 'sublist',
    remark: '图标按钮',
    type: 'String',
    default: '---',
  },
  { name: 'selectable', remark: '下划线', type: 'Boolean', default: 'false' },
  { name: 'alignItems', remark: '下划线', type: 'Boolean', default: 'false' },
  { name: 'highlightColor', remark: '下划线', type: 'Boolean', default: 'false' },
  { name: 'disablePadding', remark: '下划线', type: 'Boolean', default: 'false' },
  { name: 'cs', remark: '下划线', type: 'Boolean', default: 'false' },
]

export default list
