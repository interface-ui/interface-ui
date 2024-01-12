import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'title',
    description: 'title',
    type: 'string',
    default: '-',
  },
  {
    name: 'content',
    description: 'content',
    type: 'string',
    default: '-',
  },
  {
    name: 'duration',
    description: 'Close the delay(ms)',
    type: 'number',
    default: '2000',
  },
  {
    name: 'customIcon',
    description: 'Front icon',
    type: 'Object',
    default: '-',
  },
  {
    name: 'action',
    description: 'Tail icon',
    type: 'Object',
    default: '-',
  },
  {
    name: 'actionEvent',
    description: 'Tail icon callback event',
    type: 'Function',
    default: '-',
  },
  {
    name: 'transition',
    description: 'Animation transition effect',
    type: 'string',
    default: 'all 0.5s ease',
  },
  {
    name: 'placement',
    description: 'Message placement',
    type: 'Object',
    default: `{
      x: 'center',
      y: 'top',
    }`,
  },
]

export default list
