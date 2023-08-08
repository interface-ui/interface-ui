import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'v-model',
    remark: 'Enter box values',
    type: 'Enum',
    optional: ['string', 'number'],
    default: 'default',
  },
  {
    name: 'disabled',
    remark: 'Disable the radio box',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'option-list',
    remark: 'Single box group',
    type: 'Array',
    default: '---',
  },
  {
    name: 'color',
    remark: 'Color of radio box',
    type: 'String',
    default: '---',
  },
  {
    name: 'horizontal',
    remark: 'Horizontal arrangement',
    type: 'Boolean',
    default: 'true',
  },
]

export default list
