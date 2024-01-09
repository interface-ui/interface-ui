import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'value',
    description: '显示的值',
    type: 'String/Number',
  },
  {
    name: 'max',
    description: '显示的最大值，value超过max时，显示max+',
    type: '---',
    default: 'false',
  },
  {
    name: 'dot',
    description: '显示小圆点',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'flashing',
    description: '闪烁',
    type: 'boolean',
    default: 'false',
  },
]

export default list
