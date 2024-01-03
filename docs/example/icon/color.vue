<script lang="ts" setup>
import { HomeFilled } from '@interface-ui/icons'
</script>

<template>
  <home-filled />
  <home-filled color="red" />
  <home-filled color="green" />
  <in-svg-icon
    :component="HomeFilled"
    :color="theme => theme.colors.cyan[400]"
  />
</template>
