import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'open',
    remark: '是否显示',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'placement',
    remark: '菜单位置',
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
