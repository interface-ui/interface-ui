import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'open',
    description: 'show',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'placement',
    description: 'placement',
    type: 'Object',
    default: `
          {
            x: 'left',
            y: 'bottom',
          }
          `,
  },
]

export default list
