import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'to',
    remark: 'target route of the link,same as `to` of `vue-router`',
    type: 'string / object',
    default: '',
  },
  {
    name: 'replace',
    remark: 'if `true`, the navigation will not leave a history record',
    type: 'boolean',
    default: 'false',
  },
]

export default list
