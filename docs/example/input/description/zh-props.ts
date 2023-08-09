import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: '输入框值',
    type: 'Enum',
    optional: ['String', 'Number'],
    default: '---',
  },
  {
    name: 'disabled',
    remark: '禁用状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    remark: '一键清空',
    type: 'String',
    default: '---',
  },
  {
    name: 'prefixIcon',
    remark: '前缀图标',
    type: 'String',
    default: '---',
  },
  {
    name: 'suffixIcon',
    remark: '后缀图标',
    type: 'String',
    default: '---',
  },
  {
    name: 'type',
    remark: '输入框类型',
    type: 'Enum',
    optional: ['text', 'password', 'textarea', 'number'],
    default: 'text',
  },
]

export default list
