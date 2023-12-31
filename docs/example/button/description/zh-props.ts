import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '按钮变体',
    type: 'Enum',
    options: ['text', 'filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'size',
    description: '按钮大小',
    type: 'Enum',
    options: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'shape',
    description: '按钮形状',
    type: 'Enum',
    options: ['rounded', 'fullRounded', 'square'],
    default: 'rounded',
  },
  {
    name: 'color',
    description: '自定义按钮颜色',
    type: 'Enum',
    options: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    description: '禁用涟漪效果',
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
