import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'component',
    description: '渲染列表的组件/HTML标签',
    type: 'string | Component',
    default: 'div',
  },
  {
    name: 'background',
    description: '列表的背景颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'surface',
  },
  {
    name: 'level',
    description: '设置列表的缩进级别',
    type: 'string | number',
    default: '0',
  },
  {
    name: 'sublist',
    description: '列表是否为子列表',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'selectable',
    description: '列表是否可选择',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'align-items',
    description: '列表项的flexbox对齐方式',
    type: 'boolean',
    options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    default: 'center',
  },
  {
    name: 'highlight-color',
    description: '列表项被选中时的高亮颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'secondaryContainer',
  },
  {
    name: 'disable-padding',
    description: '是否禁用列表项的内边距',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: '覆盖默认样式的 prop',
    type: 'string | object',
  },
]

export default list
