import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: '按钮类型',
    type: 'Enum',
    optional: ['default', 'primary', 'dashed'],
    default: 'normal',
  },
  {
    name: 'size',
    remark: '按钮尺寸',
    type: 'Enum',
    optional: ['mini', 'small', 'medium', 'large'],
    default: 'normal',
  },
  {
    name: 'shape',
    remark: '按钮形状',
    type: 'Enum',
    optional: ['pill', 'round', 'circle', 'plain'],
    default: 'round',
  },
  {
    name: 'state',
    remark: '按钮状态',
    type: 'Enum',
    optional: ['info', 'success', 'warning', 'danger'],
    default: 'info',
  },
  {
    name: 'color',
    remark: '自定义按钮颜色',
    type: 'String',
    default: '---',
  },
  {
    name: 'background',
    remark: '自定义按钮背景色',
    type: 'String',
    default: '---',
  },
  { name: 'disabled', remark: '是否禁用', type: 'Boolean', default: 'false' },
  { name: 'icon', remark: '按钮图标', type: 'String', default: '' },
]

export default list
