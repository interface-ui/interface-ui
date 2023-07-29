<script setup lang="ts" name="bp-table-header">
import ColGroup from './col-group.vue'

const props = defineProps({
  headerList: { type: Array, default: () => [] },
  width: { type: [String, Number], default: '' },
})

const thClass = (item) => {
  const align = `text-${item.headerAlign || item.align || 'left'}`

  const name = [align]
  return name
}
</script>

<template>
  <table class="bp-table-header" :style="`width:${width}px`">
    <ColGroup :cols="headerList" />

    <thead class="bp-table-header-thead">
      <tr>
        <th
          v-for="(item, index) in headerList"
          :key="`bp-table-thead-${index}`"
          :class="thClass(item)"
        >
          {{ item.label }}
        </th>
      </tr>
    </thead>
  </table>
</template>
