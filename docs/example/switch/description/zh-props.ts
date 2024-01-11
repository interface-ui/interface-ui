import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: 'Binding value',
    type: 'boolean',
  },
  {
    name: 'size',
    description: '开关 size',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    description: '自定义开关的颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'disabledIcon',
    description: '隐藏在选中状态下的图标',
    type: 'boolean',
    default: 'false',
  },
]

export default list
