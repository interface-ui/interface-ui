import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'model-value / v-model',
    description: 'Controls the visibility of the Dialog.',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'title',
    description: 'The title of the Dialog.',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'width',
    description: 'The width of the Dialog.',
    type: 'String|Number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    description: 'Displays the Dialog in fullscreen mode.',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'top',
    description: 'The distance of the Dialog from the top.',
    type: 'String|Number',
    default: '30vh',
  },
  {
    name: 'center',
    description: 'Centers the Dialog on the screen.',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'close-on-click-modal',
    description: 'Determines if clicking the overlay closes the Dialog.',
    type: 'Boolean',
    default: 'true',
  },
]

export default list
