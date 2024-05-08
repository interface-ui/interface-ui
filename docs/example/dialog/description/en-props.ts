import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'open',
    description: 'Controls the visibility of the Dialog.',
    type: 'boolean',
  },

  {
    name: 'variant',
    description: 'The variant to use.',
    type: 'Enum',
    options: ['base', 'full-screen'],
    default: 'base',
  },
  {
    name: 'backdrop',
    description: 'Component mask.',
    type: 'Boolean',
    default: 'false',
  },

  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
