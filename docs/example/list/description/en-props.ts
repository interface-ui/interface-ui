import type { PropDataItem } from '@comp/data-table'
const list: PropDataItem[] = [
  {
    name: 'component',
    description: 'The component/html tag to render the list as',
    type: 'string | Component',
    default: 'div',
  },
  {
    name: 'background',
    description: 'The background color of the list',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'surface',
  },
  {
    name: 'level',
    description: 'The prop to set the indentation level of the list',
    type: 'string | number',
    default: '0',
  },
  {
    name: 'sublist',
    description: 'Whether the list is a sublist',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'selectable',
    description: 'Whether the list is selectable',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'align-items',
    description: 'The flexbox alignment of the list items',
    type: 'boolean',
    options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    default: 'center',
  },
  {
    name: 'highlight-color',
    description: 'The color of the highlight when the list item is selected',
    type: 'AcceptableColor',
    options: ['ThemeSchemes', 'ThemeCallBack', 'string'],
    default: 'secondaryContainer',
  },
  {
    name: 'disable-padding',
    description: 'Whether to disable the padding of the list items',
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
