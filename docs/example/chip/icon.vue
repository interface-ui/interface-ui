<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { TodayFilled } = pkg
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
