import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'open',
    remark: 'show',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'placement',
    remark: 'placement',
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
