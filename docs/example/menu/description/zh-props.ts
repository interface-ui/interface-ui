import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'open',
    description: '是否显示',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'placement',
    description: '菜单位置',
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
