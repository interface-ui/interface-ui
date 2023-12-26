<script lang="ts" setup>
import '@interface-ui/core/src/link/src/index.less' // 开发调试的样式
import { InLink } from '@interface-ui/core'
</script>

<template>
  <div class="content">
    <in-link href="#">Link</in-link>
    <in-link href="#" underline="none">Link</in-link>
    <in-link href="#" underline="hover">Link</in-link>
  </div>
  <div class="content">
    <in-link href="#">Link</in-link>
    <in-link href="#" color="tertiary">Link</in-link>
    <in-link href="#" color="inherit">Link</in-link>
    <in-link href="#" color="error">Link</in-link>
    <in-link href="#" :color="theme => theme.colors.cyan[400]">Link</in-link>
    <in-link href="#" color="#2E7D32">Link</in-link>
  </div>
</template>
