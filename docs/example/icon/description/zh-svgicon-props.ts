import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'size',
    description: '图标尺寸',
    type: 'string | number',
    default: 'inherit',
  },
  {
    name: 'color',
    description: '图标颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'inherit',
  },
  {
    name: 'component',
    description: '渲染的组件',
    type: 'string | Component',
    default: 'svg',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
