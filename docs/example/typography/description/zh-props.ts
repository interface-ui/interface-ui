import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: '排版变体',
    type: 'Enum',
    optional: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'title.small',
      'title.medium',
      'title.large',
      'body.small',
      'body.medium',
      'body.large',
      'label.small',
      'label.medium',
      'label.large',
    ],
    default: 'body.large',
  },
  {
    name: 'component',
    remark: '渲染在html中的tag',
    type: 'ElementType',
  },
  {
    name: 'noWarp',
    remark: '字体不换行',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'gutter',
    remark: '上下边距',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
