import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: '标签类型',
    type: 'Enum',
    optional: ['success', 'info', 'warning','danger'],
    default: '',
  },
  {
    name: 'size',
    remark: '标签尺寸',
    type: 'Enum',
    optional: [ 'small', 'large'],
    default: '',
  },
  {
    name: 'closable',
    remark: '是否可关闭',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'round',
    remark: '标签是否为圆形',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    remark: '自定义标签颜色',
    type: 'String',
    default: '-',
  },
]

export default list
