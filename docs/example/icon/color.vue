<script lang="ts" setup>
import { HomeFilled } from 'fusion-ui-iconify'
</script>

<template>
  <home-filled />
  <home-filled color="red" />
  <home-filled color="green" />
  <fn-svg-icon
    :component="HomeFilled"
    :color="theme => theme.colors.cyan[400]"
  />
</template>
