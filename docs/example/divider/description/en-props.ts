import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'variant',
    description: 'Divider variant',
    type: 'string',
    options: ['full-width', 'inset'],
    default: 'full-width',
  },
  {
    name: 'orientation',
    description: 'Divider orientation',
    type: 'string',
    options: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  {
    name: 'text-align',
    description: 'The text align for the text inside the divider',
    type: 'string',
    options: ['left', 'center', 'right'],
    default: 'center',
  },
  {
    name: 'component',
    description: 'The component/html tag to render the divider as',
    type: 'string | Component',
    default: 'hr',
  },
  {
    name: 'no-margin',
    description: 'Add the top and bottom margin to the divider',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'cs',
    description: 'Prop to overwrite the default style',
    type: 'string | object',
  },
]

export default list
