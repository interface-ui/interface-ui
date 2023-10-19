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
    remark: '激活状态颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: '图标按钮',
    type: 'String',
    default: '---',
  },
  {
    name: 'checked-text',
    remark: '激活状态文字',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-text',
    remark: '关闭状态文字',
    type: 'String',
    default: '---',
  },

  {
    name: 'checked-icon',
    remark: '激活图标',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-icon',
    remark: '关闭图标',
    type: 'String',
    default: '---',
  },
  {
    name: 'checked-icon-color',
    remark: '激活图标颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-icon-color',
    remark: '关闭图标颜色',
    type: 'String',
    default: '---',
  },
]

export default list
