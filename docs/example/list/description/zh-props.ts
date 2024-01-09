import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'component',
    description: '颜色',
    default: '--',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
  },
  {
    name: 'background',
    description: '背景颜色',
    default: 'surface',
    type: 'String｜Function',
  },
  {
    name: 'level',
    description: '原生 href 属性',
    type: 'string',
  },
  {
    name: 'sublist',
    description: '图标按钮',
    type: 'string',
  },
  {
    name: 'selectable',
    description: '下划线',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'alignItems',
    description: '下划线',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'highlightColor',
    description: '下划线',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'disablePadding',
    description: '下划线',
    type: 'boolean',
    default: 'false',
  },
  { name: 'cs', description: '下划线', type: 'boolean', default: 'false' },
]

export default list
