import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'color',
    remark: '颜色',
    default: '--',
    type: 'Enum',
    optional: ['ThemePaletteColor', 'ThemeCallBack', 'String'],
  },
  {
    name: 'underline',
    remark: '下划线',
    default: 'hover',
    type: 'Enum',
    optional: ['hover', 'none', 'always'],
  },
  {
    name: 'href',
    remark: '原生 href 属性',
    type: 'String',
    default: '---',
  },
  {
    name: 'icon',
    remark: '图标按钮',
    type: 'String',
    default: '---',
  },
  { name: 'underline', remark: '下划线', type: 'Boolean', default: 'false' },
]

export default list
