import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'header',
    description: '卡片头部内容',
    type: 'string',
    default: '"card-header"',
  },
  {
    name: 'border',
    description: '卡片边框',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'hover',
    description: '悬浮效果',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'background',
    description: '卡片颜色',
    type: 'string',
    default: '',
  },
  {
    name: 'width',
    description: '卡片宽度',
    type: 'number',
    default: '300',
  },
]

export default list
