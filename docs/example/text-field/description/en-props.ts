import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'modelValue',
    remark: 'Binding value',
    type: 'String',
    default: '---',
  },
  {
    name: 'variant',
    remark: 'Component variant',
    type: 'Enum',
    optional: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'Label',
    remark: 'Form control label',
    type: 'String',
    default: '---',
  },
  {
    name: 'color',
    remark: 'Customize the color of buttons',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    remark: 'Button size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    remark: 'Error state',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    remark: 'Supporting text',
    type: 'String',
    default: '---',
  },
]

export default list
