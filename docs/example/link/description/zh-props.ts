import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'color',
    description: '颜色',
    default: '--',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
  },
  {
    name: 'underline',
    description: '下划线',
    default: 'hover',
    type: 'Enum',
    options: ['hover', 'none', 'always'],
  },
  {
    name: 'href',
    description: '原生 href 属性',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    description: '图标按钮',
    type: 'String',
    default: '---',
  },
  {
    name: 'underline',
    description: '下划线',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
