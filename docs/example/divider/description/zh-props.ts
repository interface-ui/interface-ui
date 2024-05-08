import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: '分割线变体',
    type: 'string',
    options: ['full-width', 'inset'],
    default: 'full-width',
  },
  {
    name: 'orientation',
    description: '分割线方向',
    type: 'string',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  {
    name: 'text-align',
    description: '分割线内文本的对齐方式',
    type: 'string',
    options: ['left', 'center', 'right'],
    default: 'center',
  },
  {
    name: 'component',
    description: '渲染分割线的组件/HTML标签',
    type: 'string | Component',
    default: 'hr',
  },
  {
    name: 'no-margin',
    description: '为分割线添加上下边距',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: '覆盖默认样式的 prop',
    type: 'string | object',
  },
]

export default list
