import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '排版变体',
    type: 'Enum',
    options: [
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
    description: '渲染在html中的tag',
    type: 'ElementType',
  },
  {
    name: 'noWarp',
    description: '字体不换行',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'gutter',
    description: '上下边距',
    type: 'boolean',
    default: 'false',
  },
]

export default list
