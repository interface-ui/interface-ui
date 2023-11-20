import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [

  {
    name: 'title',
    remark: '标题',
    type: 'String',
    default: '--',
  },
  {
    name: 'content',
    remark: '内容',
    type: 'String',
    default: '--',
  },
  {
    name: 'duration',
    remark: '关闭延时(ms)',
    type: 'Number',
    default: '2000',
  },
  {
    name: 'customIcon',
    remark: '前部图标',
    type: 'Object',
    default: '--',
  },
  {
    name: 'action',
    remark: '尾部图标',
    type: 'Object',
    default: '--',
  },
  {
    name: 'actionEvent',
    remark: '尾部图标回调事件',
    type: 'Function',
    default: '--',
  },
  {
    name: 'transition',
    remark: '动画过渡效果',
    type: 'String',
    default: 'all 0.5s ease',
  },
  {
    name: 'placement',
    remark: '消息位置',
    type: 'Object',
    default: `{
      x: 'center',
      y: 'top',
    }`,
  },

]

export default list
