import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: '是否显示Dialog',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'title',
    remark: 'Dialog标题',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'width',
    remark: 'Dialog宽度',
    type: 'String|Number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    remark: '按钮状态',
    type: 'Boolean',
    default: 'false',
  },
  { name: 'top', remark: '距离上部的距离', type: 'String|Number', default: '30vh' },
  { name: 'center', remark: 'Dialog居中显示', type: 'Boolean', default: '---' },
  { name: 'close-on-click-modal', remark: '点击蒙层关闭', type: 'Boolean', default: 'true' },
]

export default list
