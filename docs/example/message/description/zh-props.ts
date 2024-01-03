import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'title',
    description: '标题',
    type: 'String',
    default: '--',
  },
  {
    name: 'content',
    description: '内容',
    type: 'String',
    default: '--',
  },
  {
    name: 'duration',
    description: '关闭延时(ms)',
    type: 'Number',
    default: '2000',
  },
  {
    name: 'customIcon',
    description: '前部图标',
    type: 'Object',
    default: '--',
  },
  {
    name: 'action',
    description: '尾部图标',
    type: 'Object',
    default: '--',
  },
  {
    name: 'actionEvent',
    description: '尾部图标回调事件',
    type: 'Function',
    default: '--',
  },
  {
    name: 'transition',
    description: '动画过渡效果',
    type: 'String',
    default: 'all 0.5s ease',
  },
  {
    name: 'placement',
    description: '消息位置',
    type: 'Object',
    default: `{
      x: 'center',
      y: 'top',
    }`,
  },
]

export default list
