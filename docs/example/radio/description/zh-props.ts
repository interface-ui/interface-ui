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
    name: 'disabled',
    remark: '禁用单选框',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'option-list',
    remark: '单选框组',
    type: 'Array',
    default: '---',
  },
  {
    name: 'color',
    remark: '单选框颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'horizontal',
    remark: '水平排列',
    type: 'Boolean',
    default: 'true',
  },
]

export default list
