import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'link attrs',
    description: '所有 <a /> 标签的属性 (href, target, 等等)',
    type: '-',
  },
  {
    name: 'color',
    description: '颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: '-',
  },
  {
    name: 'underline',
    description: '下划线',
    default: 'hover',
    type: 'string',
    options: ['hover', 'none', 'always'],
  },
  {
    name: 'icon',
    description: '图标按钮',
    type: 'string',
  },
  {
    name: 'underline',
    description: '下划线',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
