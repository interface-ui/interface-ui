import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: 'Typography variant',
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
    remark: 'The tag rendered in the html',
    type: 'ElementType',
  },
  {
    name: 'noWarp',
    remark: 'Make the text no wrap',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'gutter',
    remark: 'The margin of top and bottom',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
