import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'value',
    description: 'display value.',
    type: 'String/Number',
  },
  {
    name: 'max',
    description:
      'The maximum value displayed, when the value exceeds max, display max+',
    type: '---',
    default: 'false',
  },
  {
    name: 'dot',
    description: 'Show small dots',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'flashing',
    description: 'Flashing',
    type: 'boolean',
    default: 'false',
  },
]

export default list
