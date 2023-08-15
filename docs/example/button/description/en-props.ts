import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: 'button type',
    type: 'Enum',
    optional: ['default', 'primary', 'dashed', 'dashed'],
    default: 'normal',
  },
  {
    name: 'size',
    remark: 'button size',
    type: 'Enum',
    optional: ['mini', 'small', 'medium', 'large'],
    default: 'normal',
  },
  {
    name: 'shape',
    remark: 'button shape',
    type: 'Enum',
    optional: ['pill', 'round', 'circle', 'plain'],
    default: 'round',
  },
  {
    name: 'state',
    remark: 'button shape',
    type: 'Enum',
    optional: ['info', 'success', 'warning', 'danger'],
    default: 'info',
  },
  {
    name: 'color',
    remark: 'Customize the color of buttons',
    type: 'String',
    default: '---',
  },
  {
    name: 'background',
    remark: 'Customize button background color',
    type: 'String',
    default: '---',
  },
  { name: 'disabled', remark: 'disable the button', type: 'Boolean', default: 'false' },
  { name: 'icon', remark: 'icon component', type: 'String', default: '' },
]

export default list
