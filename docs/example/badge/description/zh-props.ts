import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'value',
    remark: '显示的值',
    type: 'String/Number',
    default: '---',
  },
  {
    name: 'max',
    remark: '显示的最大值，value超过max时，显示max+',
    type: '---',
    default: 'false',
  },
  {
    name: 'dot',
    remark: '显示小圆点',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'flashing',
    remark: '闪烁',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
