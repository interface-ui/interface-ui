import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'content',
    description: '徽章内容',
    type: 'string | number | Component',
  },
  {
    name: 'variant',
    description: '徽章变体，当 variant 为 dot 时，content 会被忽略',
    type: 'string',
    options: ['dot', 'content'],
  },
  {
    name: 'color',
    description: '自定义徽章背景颜色',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'error',
  },
  {
    name: 'max',
    description: '显示的最大值',
    type: 'string | number',
  },
  {
    name: 'overlap',
    description: '是否将徽章覆盖在被包裹组件上',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'x-align',
    description: '水平方向上的对齐方式',
    type: 'string',
    options: ['left', 'right'],
  },
  {
    name: 'y-align',
    description: '垂直方向上的对齐方式',
    type: 'string',
    options: ['top', 'bottom'],
  },
  {
    name: 'cs',
    description: '覆盖组件默认样式的 prop',
    type: 'string | object',
  },
]

export default list
