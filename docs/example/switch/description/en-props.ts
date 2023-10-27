import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'modelValue',
    remark: 'Binding value',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'size',
    remark: 'Switch size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: 'Customize the color of switches',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disabledIcon',
    remark: 'Hide the icon in checked state',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
