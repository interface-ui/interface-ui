import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'color',
    remark: 'color',
    default: '--',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
  },
  {
    name: 'underline',
    remark: 'underline',
    default: 'hover',
    type: 'Enum',
    optional: ['hover', 'none', 'always'],
  },
  {
    name: 'href',
    remark: 'Native href attribute',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: 'Icon component',
    type: 'String',
    default: '---',
  },
  { name: 'underline', remark: 'underline', type: 'Boolean', default: 'false' },
]

export default list
