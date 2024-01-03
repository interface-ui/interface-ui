import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'src',
    description: '图片的源地址',
    type: 'String',
    default: '---',
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'Enum',
    options: ['small', 'default', 'large'],
    default: '---',
  },
  {
    name: 'width',
    description: '宽度',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'height',
    description: '高度',
    type: 'String/Number',
    default: '40',
  },
  {
    name: 'color',
    description: '文字颜色',
    type: 'String',
    default: 'white',
  },
  {
    name: 'background',
    description: '背景颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'shape',
    description: '形状',
    type: 'Enum',
    options: ['circle', 'square', 'rounded'],
    default: 'circle',
  },
  {
    name: 'max',
    description: '限制头像的数量',
    type: 'String/Number',
    default: '5',
  },
  {
    name: 'total',
    description: '控制未显示头像的数量',
    type: 'String/Number',
    default: '0',
  },
]

export default list
