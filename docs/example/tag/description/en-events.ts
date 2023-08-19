import type { EventTableItem } from "../../../.vitepress/components/table-block/src/table"

const list: EventTableItem[] = [
  { name: "click", remark: "triggers when Tag is clicked",type:'(e)=>void' },
  { name: "close", remark: "triggers when Tag is removed",type:'(e)=>void'  },
]

export default list
