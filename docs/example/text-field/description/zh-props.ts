import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: '绑定值',
    type: 'String',
    default: '---',
  },
  {
    name: 'variant',
    description: '文本输入变体',
    type: 'Enum',
    options: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'label',
    description: '表单标签',
    type: 'String',
    default: '---',
  },
  {
    name: 'color',
    description: '自定义文本输入focus状态的颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    description: '组件大小',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    description: '错误状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    description: '描述文字',
    type: 'String',
    default: '---',
  },
]

export default list
