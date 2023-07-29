<script setup lang="ts" name="bp-table-empty">
const props = defineProps({
  colspan: { type: Number, default: 0 },
})
</script>

<template>
  <tr class="bp-table-empty-tr">
    <td :colspan="colspan">
      暂无数据
    </td>
  </tr>
</template>
