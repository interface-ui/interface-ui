import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'v-model / modelValue',
    description: '绑定的值',
    type: 'boolean | string | Set<string>',
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: '颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'label',
    description: '标签',
    type: 'string',
  },
  {
    name: 'disabled',
    description: '禁用',
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
