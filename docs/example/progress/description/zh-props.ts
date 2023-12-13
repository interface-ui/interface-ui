import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: '进度条变体',
    type: 'Enum',
    optional: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    remark: '进度条状态',
    type: 'Enum',
    optional: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    remark: '进度条百分比',
    type: 'Number | String',
    default: '---',
  },
  {
    name: 'color',
    remark: '自定义进度条颜色',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'cs',
    remark: 'Flexible css configuration',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },
]

export default list
