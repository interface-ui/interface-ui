import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'modelValue',
    description: '绑定值',
    type: 'string',
  },
  {
    name: 'variant',
    description: '文本输入变体',
    type: 'string',
    options: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'label',
    description: '表单标签',
    type: 'string',
  },
  {
    name: 'color',
    description: '自定义文本输入focus状态的颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'primary',
  },
  {
    name: 'size',
    description: '组件大小',
    type: 'string',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    description: '错误状态',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    description: '描述文字',
    type: 'string',
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
