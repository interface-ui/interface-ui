import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: '是否显示Dialog',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'title',
    description: 'Dialog标题',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'width',
    description: 'Dialog宽度',
    type: 'String|Number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    description: '按钮状态',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'top',
    description: '距离上部的距离',
    type: 'String|Number',
    default: '30vh',
  },
  {
    name: 'center',
    description: 'Dialog居中显示',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'close-on-click-modal',
    description: '点击蒙层关闭',
    type: 'Boolean',
    default: 'true',
  },
]

export default list
