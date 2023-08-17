import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'value',
    remark: 'display value.',
    type: 'String/Number',
    default: '---',
  },
  {
    name: 'max',
    remark: 'The maximum value displayed, when the value exceeds max, display max+',
    type: '---',
    default: 'false',
  },
  {
    name: 'dot',
    remark: 'Show small dots',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'flashing',
    remark: 'Flashing',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
