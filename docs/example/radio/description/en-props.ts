import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'v-model',
    remark: 'Enter box values',
    type: 'Enum',
    optional: ['string', 'number'],
    default: 'default',
  },
  {
    name: 'size',
    remark: 'Radio size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'color',
    remark: 'Customize the color of radios',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
]

export default list
