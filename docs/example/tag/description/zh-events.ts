import type { EventTableItem } from "../../../.vitepress/components/table-block/src/table"

const list: EventTableItem[] = [
  { name: "click", remark: "点击Tag时触发的事件",type:'(e)=>void' },
  { name: "close", remark: "关闭Tag时触发的事件",type:'(e)=>void'  },
]

export default list
