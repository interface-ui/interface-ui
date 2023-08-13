import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'type',
    remark: 'Set the link type',
    type: 'Enum',
    optional: ['primary', 'success', 'warning', 'danger', 'info', 'default'],
    default: 'default',
  },
  {
    name: 'disabled',
    remark: 'Set the link as disabled',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'color',
    remark: 'Activation status color',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: 'Icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'checked-text',
    remark: 'Activate the status text',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-text',
    remark: 'Close the status text',
    type: 'String',
    default: '---',
  },

  {
    name: 'checked-icon',
    remark: 'Activate the icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-icon',
    remark: 'Close the icon',
    type: 'String',
    default: '---',
  },
  {
    name: 'checked-icon-color',
    remark: 'Activate the icon color',
    type: 'String',
    default: '---',
  },
  {
    name: 'un-checked-icon-color',
    remark: 'Turn off the icon color',
    type: 'String',
    default: '---',
  },
]

export default list
