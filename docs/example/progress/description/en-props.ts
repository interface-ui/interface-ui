import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: 'Progress variants',
    type: 'Enum',
    optional: ['circular', 'linear'],
    default: 'circular',
  },
  {
    name: 'status',
    remark: 'Progress bar status representation',
    type: 'Enum',
    optional: ['determinate', 'indeterminate'],
    default: 'indeterminate',
  },
  {
    name: 'value',
    remark: 'Percentage of the progress indicator',
    type: 'Number | String',
    default: '---',
  },
  {
    name: 'color',
    remark: 'Customize the color of indicator',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'cs',
    remark: 'Flexible css configuration',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },
]

export default list
