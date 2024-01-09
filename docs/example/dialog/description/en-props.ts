import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: 'Controls the visibility of the Dialog.',
    type: 'boolean',
  },
  {
    name: 'title',
    description: 'The title of the Dialog.',
    type: 'boolean',
  },
  {
    name: 'width',
    description: 'The width of the Dialog.',
    type: 'string | number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    description: 'Displays the Dialog in fullscreen mode.',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'top',
    description: 'The distance of the Dialog from the top.',
    type: 'string | number',
    default: '30vh',
  },
  {
    name: 'center',
    description: 'Centers the Dialog on the screen.',
    type: 'boolean',
  },
  {
    name: 'close-on-click-modal',
    description: 'Determines if clicking the overlay closes the Dialog.',
    type: 'boolean',
    default: 'true',
  },
]

export default list
