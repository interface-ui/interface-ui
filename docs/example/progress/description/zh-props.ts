import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'percentage',
    remark: '进度百分比',
    type: 'Number',
    default: '0',
  },
  {
    name: 'status',
    remark: '进度条状态表示',
    type: 'Enum',
    optional: ['success', 'danger', 'warning'],
    default: '---',
  },
  {
    name: 'text-inside',
    remark: '进度条内百分比',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'height',
    remark: '线性进度条高度',
    type: 'String',
    default: '6px',
  },
  {
    name: 'background',
    remark: '控制进度条的颜色/环形进度条未激活背景的颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'bar-color',
    remark: '进度条内百分比标识的颜色',
    type: 'String',
    default: '#4987f8',
  },
  {
    name: 'type',
    remark: '进度条类型',
    type: 'Enum',
    optional: ['line', 'circle'],
    default: 'line',
  },
  {
    name: 'width',
    remark: '环形进度条大小',
    type: 'Enum',
    optional: ['String', 'Number'],
    default: '120px',
  },
  {
    name: 'stroke-width',
    remark: '环形进度条的宽度',
    type: 'String',
    default: '6px',
  },
  {
    name: 'color',
    remark: '环形进度条激活背景的颜色',
    type: 'String',
    default: '#4e7aef',
  },
  {
    name: 'intermediate',
    remark: '环形进度条不确定的进度',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'duration',
    remark: '动画执行时间',
    type: 'Number',
    default: '2s',
  },
  {
    name: 'striped',
    remark: '在进度条上增加条纹',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'striped-flow',
    remark: '让进度条上的条纹流动起来',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
