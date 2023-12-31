import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: '按钮变体',
    type: 'Enum',
    optional: ['text', 'filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'size',
    remark: '按钮大小',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'shape',
    remark: '按钮形状',
    type: 'Enum',
    optional: ['rounded', 'fullRounded', 'square'],
    default: 'rounded',
  },
  {
    name: 'color',
    remark: '自定义按钮颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    remark: '禁用涟漪效果',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'orientation',
    remark: '按钮的排列方向',
    type: 'Enum',
    optional: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  {
    name: 'cs',
    remark: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
]

export default list
