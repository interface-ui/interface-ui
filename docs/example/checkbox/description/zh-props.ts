import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'v-model',
    remark: '绑定的值',
    type: 'Boolean|Array',
    default: '---',
  },
  {
    name: 'size',
    remark: '尺寸',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: '颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'label',
    remark: '标签',
    type: 'string',
    default: '---',
  },
  {
    name: 'disabled',
    remark: '禁用',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'cs',
    remark: '覆盖组件默认样式的prop',
    type: 'TemplateStringsArray',
  },
]

export default list
