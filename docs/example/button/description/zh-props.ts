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
    type: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    remark: '禁用涟漪效果',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disableElevation',
    remark: '禁用阴影',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
