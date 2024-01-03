<script lang="ts" setup>
import Today from '@interface-ui/icons/TodayFilled.js'
</script>

<template>
  <in-chip>
    <today />
    Today
  </in-chip>
  <in-chip variant="outlined">
    Today
    <today />
  </in-chip>
</template>
