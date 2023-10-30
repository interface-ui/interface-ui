import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'v-model',
    remark: '绑定的值',
    type: 'Enum',
    optional: ['string', 'number'],
    default: 'default',
  },
  {
    name: 'size',
    remark: '单选框尺寸',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: '自定义单选框颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
]

export default list
