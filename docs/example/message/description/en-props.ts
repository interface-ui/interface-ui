import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'title',
    remark: 'title',
    type: 'String',
    default: '--',
  },
  {
    name: 'content',
    remark: 'content',
    type: 'String',
    default: '--',
  },
  {
    name: 'duration',
    remark: 'Close the delay(ms)',
    type: 'Number',
    default: '2000',
  },
  {
    name: 'customIcon',
    remark: 'Front icon',
    type: 'Object',
    default: '--',
  },
  {
    name: 'action',
    remark: 'Tail icon',
    type: 'Object',
    default: '--',
  },
  {
    name: 'actionEvent',
    remark: 'Tail icon callback event',
    type: 'Function',
    default: '--',
  },
  {
    name: 'transition',
    remark: 'Animation transition effect',
    type: 'String',
    default: 'all 0.5s ease',
  },
  {
    name: 'placement',
    remark: 'Message placement',
    type: 'Object',
    default: `{
      x: 'center',
      y: 'top',
    }`,
  },
]

export default list
