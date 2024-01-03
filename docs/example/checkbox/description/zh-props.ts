import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model',
    description: '绑定的值',
    type: 'Boolean|Array',
    default: '---',
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: '颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'label',
    description: '标签',
    type: 'string',
    default: '---',
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
]

export default list
