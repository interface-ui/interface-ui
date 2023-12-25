<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { HomeFilled } = pkg
// import { HomeFilled } from 'fusion-ui-iconify'
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
