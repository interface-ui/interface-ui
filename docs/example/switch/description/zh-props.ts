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
    remark: '开关 size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: '自定义开关的颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disabledIcon',
    remark: '隐藏在选中状态下的图标',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
