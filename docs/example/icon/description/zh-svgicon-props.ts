import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: '图标尺寸',
    type: 'String | Number',
    default: 'inherit',
  },
  {
    name: 'color',
    description: '图标颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'inherit',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
  {
    name: 'component',
    description: '渲染的组件',
    type: 'String | Component',
    default: 'svg',
  },
]

export default list
