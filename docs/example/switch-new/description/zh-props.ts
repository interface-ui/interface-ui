import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: '绑定值',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    remark: '禁用状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    remark: '自定义颜色',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    remark: '尺寸',
    type: 'Enum',
    optional: ['medium', 'small'],
    default: 'medium',
  },

]

export default list
