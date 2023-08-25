import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'src',
    remark: '图片的源地址',
    type: 'String',
    default: '---',
  },
  {
    name: 'size',
    remark: '大小',
    type: 'Enum',
    optional: ['small', 'default', 'large'],
    default: '---',
  },
  {
    name: 'width',
    remark: '宽度',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'height',
    remark: '高度',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'color',
    remark: '文字颜色',
    type: 'String',
    default: 'white',
  },
  {
    name: 'background',
    remark: '背景颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'shape',
    remark: '形状',
    type: 'Enum',
    optional: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
]

export default list
