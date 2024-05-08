import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'separator',
    description: '分隔符',
    type: 'String | Component',
    default: '/',
  },
  {
    name: 'color',
    description: '链接颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'underline',
    description: '下划线样式',
    type: 'Enum',
    options: ['none', 'hover', 'always'],
    default: 'hover',
  },
  {
    name: 'max',
    description: '渲染的最大数量',
    type: 'String | Number',
    default: '-',
  },
  {
    name: 'cs',
    description: '配置Css',
    type: 'String | Object',
    default: '-',
  },
]

export default list
