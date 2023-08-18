import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'header',
    remark: '卡片头部内容',
    type: 'string',
    default: '"card-header"',
  },
  {
    name: 'border',
    remark: '卡片边框',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'hover',
    remark: '悬浮效果',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'background',
    remark: '卡片颜色',
    type: 'string',
    default: '',
  },
  {
    name: 'width',
    remark: '卡片宽度',
    type: 'number',
    default: '300',
  },
]

export default list
