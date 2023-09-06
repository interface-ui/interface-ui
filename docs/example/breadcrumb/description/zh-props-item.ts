import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'to',
    remark: '路由跳转目标，同 vue-router 的 to',
    type: 'string / object',
    default: '',
  },
  {
    name: 'replace',
    remark: '设置后导航将不会留下历史记录',
    type: 'boolean',
    default: 'false',
  },
]

export default list
