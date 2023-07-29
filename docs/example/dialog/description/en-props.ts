import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'model-value / v-model',
    remark: 'Controls the visibility of the Dialog.',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'title',
    remark: 'The title of the Dialog.',
    type: 'Boolean',
    default: '---',
  },
  {
    name: 'width',
    remark: 'The width of the Dialog.',
    type: 'String|Number',
    default: '30%',
  },
  {
    name: 'fullscreen',
    remark: 'Displays the Dialog in fullscreen mode.',
    type: 'Boolean',
    default: 'false',
  },
  { name: 'top', remark: 'The distance of the Dialog from the top.', type: 'String|Number', default: '30vh' },
  { name: 'center', remark: 'Centers the Dialog on the screen.', type: 'Boolean', default: '---' },
  { name: 'close-on-click-modal', remark: 'Determines if clicking the overlay closes the Dialog.', type: 'Boolean', default: 'true' },
]

export default list
