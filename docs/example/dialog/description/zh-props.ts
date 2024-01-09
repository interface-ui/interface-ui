import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: '是否显示Dialog',
    type: 'boolean',
  },
  {
    name: 'title',
    description: 'Dialog标题',
    type: 'boolean',
  },
  {
    name: 'width',
    description: 'Dialog宽度',
    type: 'string | number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    description: '按钮状态',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'top',
    description: '距离上部的距离',
    type: 'string | number',
    default: '30vh',
  },
  {
    name: 'center',
    description: 'Dialog居中显示',
    type: 'boolean',
  },
  {
    name: 'close-on-click-modal',
    description: '点击蒙层关闭',
    type: 'boolean',
    default: 'true',
  },
]

export default list
