import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: '变体',
    type: 'Enum',
    optional: ['filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'clickable',
    remark: '可点击状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    remark: '禁用状态',
    type: 'Boolean',
    default: 'false%',
  },
  {
    name: 'color',
    remark: '颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: '---',
  },
  {
    name: 'deletable',
    remark: '颜色',
    type: 'Boolean',
    default: 'false',
  },

]

export default list
