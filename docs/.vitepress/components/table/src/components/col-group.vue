<script setup lang="ts" name="bp-table-columns">
const props = defineProps({
  cols: { type: Array, default: () => [] },
})
</script>

<template>
  <colgroup>
    <col
      v-for="(item, index) in cols"
      :key="`bp-table-tr-${index}`"
      :name="`bp_table_tr_${index}`"
      :width="`${item.width}px`"
    >
  </colgroup>
</template>
