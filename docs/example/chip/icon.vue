<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { TodayFilled } = pkg
</script>

<template>
  <fn-chip>
    <today-filled />
    Today
  </fn-chip>
  <fn-chip variant="outlined">
    <today-filled />
    Today
  </fn-chip>
</template>
