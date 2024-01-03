<script lang="ts" setup>
import { TodayFilled } from '@interface-ui/icons'
</script>

<template>
  <in-chip>
    <today-filled />
    Today
  </in-chip>
  <in-chip variant="outlined">
    Today
    <today-filled />
  </in-chip>
</template>
