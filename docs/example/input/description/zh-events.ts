import type { EventTableItem } from '../../../.vitepress/components/table-block/src/table'

const list: EventTableItem[] = [
  { name: 'focus', remark: '当选择器的输入框获得焦点时触发', type: 'Function' },
  { name: 'change', remark: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发', type: 'Function' },
  { name: 'input', remark: '在 Input 值改变时触发', type: 'Function' },
]

export default list
