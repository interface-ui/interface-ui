<script setup lang="ts" name="table">
import { computed } from 'vue'
import { useTable } from './table'
import TableHeader from './components/table-header.vue'
import TableEmpty from './components/empty.vue'
import ColGroup from './components/col-group.vue'

const props = defineProps({
  cols: { type: Array, default: () => [] }, // 表格头部列表 Table header list
  dataSource: { type: Array, default: () => [] }, // 表格数据 Table data source
  height: { type: String, default: '' }, // 固定高度 Fixed height
  loading: { type: Boolean, default: false }, // 加载状态 loading or not
  border: { type: Boolean, default: false }, // 展示边框 Bordered or not
  stripe: { type: Boolean, default: false }, // 斑马纹 Stripe or not
})

const { bpTable, columns, _table_width } = useTable(props)

const isEmpty = computed(() => props.dataSource.length === 0)
const hasBorder = computed(() => props.border)
const isStripe = computed(() => props.stripe)
const fixedHeight = computed(() => props.height)

const bodyAreaStyle = computed(() => {
  if (props.height)
    return `width:${_table_width.value}px;max-height:${props.height}px;height:${props.height}px;overflow-y:auto`

  return `width:${_table_width.value}px`
})

const innerClass = computed(() => {
  const name = ['bp-table-inner',
    { 'bp-table-border': hasBorder.value },
    { 'bp-table-stripe': isStripe.value },
    { 'bp-table-fixed-header': fixedHeight.value },
  ]
  return name
})

const tdClass = (v) => {
  const align = `text-${v.align || 'left'}`

  const name = [align]
  return name
}
</script>

<template>
  <div ref="bpTable" class="bp-table">
    <div :class="innerClass">
      <TableHeader :header-list="columns" :width="_table_width" />

      <div class="bp-table-body-area" :style="bodyAreaStyle">
        <div class="scrollbar" />

        <table class="bp-table-body" :style="`width:${_table_width}px`">
          <ColGroup :cols="columns" />

          <tbody class="bp-table-body-tbody">
            <TableEmpty v-if="isEmpty" :colspan="columns.length" />

            <template v-else>
              <tr v-for="(item, index) in dataSource" :key="`bp-table-tbody-tr-${index}`">
                <td
                  v-for="(v, k) in columns"
                  :key="`bp-table-tbody-td-${index}-${k}`"
                  :class="tdClass(v)"
                >
                  <template v-if="!v.scope">
                    {{ item[v.key] }}
                  </template>

                  <slot
                    v-else
                    :name="v.scope.customRender"
                    :row="item"
                    :index="index"
                    :data="item[v.key]"
                  />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
