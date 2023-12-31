import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'size',
    remark: 'Icon size',
    type: 'String | Number',
    default: 'inherit',
  },
  {
    name: 'color',
    remark: 'Customize the color of buttons',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'inherit',
  },
  {
    name: 'cs',
    remark: 'Prop to overwrite the default style',
    type: 'TemplateStringsArray',
  },
  {
    name: 'component',
    remark: 'The component to render the icon',
    type: 'String | Component',
    default: 'svg',
  },
]

export default list
