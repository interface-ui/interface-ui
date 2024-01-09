import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Typography variant',
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
    description: 'The tag rendered in the html',
    type: 'ElementType',
  },
  {
    name: 'noWarp',
    description: 'Make the text no wrap',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'gutter',
    description: 'The margin of top and bottom',
    type: 'boolean',
    default: 'false',
  },
]

export default list
