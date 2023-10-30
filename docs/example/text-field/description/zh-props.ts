import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'modelValue',
    remark: '绑定值',
    type: 'String',
    default: '---',
  },
  {
    name: 'variant',
    remark: '文本输入变体',
    type: 'Enum',
    optional: ['outlined', 'filled', 'standard'],
    default: 'outlined',
  },
  {
    name: 'label',
    remark: '表单标签',
    type: 'String',
    default: '---',
  },
  {
    name: 'color',
    remark: '自定义文本输入focus状态的颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'size',
    remark: '组件大小',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'error',
    remark: '错误状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'supporting-text',
    remark: '描述文字',
    type: 'String',
    default: '---',
  },
]

export default list
