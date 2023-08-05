import type { EventTableItem } from '../../../.vitepress/components/table-block/src/table'

const list: EventTableItem[] = [
  { name: 'focus', remark: 'Triggered when the input box of the selector gets the focus', type: 'Function' },
  { name: 'change', remark: 'Only when the modelValue changes, it is triggered when the input box loses focus or the user presses Enter.', type: 'Function' },
  { name: 'input', remark: 'Triggered when the Input value changes', type: 'Function' },
]

export default list
