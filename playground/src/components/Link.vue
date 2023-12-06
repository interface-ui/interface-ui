<script lang="ts" setup>
import '@fusion-ui-vue/components/src/link/src/index.less' // 开发调试的样式
import { FnLink } from '@fusion-ui-vue/components'
</script>

<template>
  <div class="content">
    <fn-link href="#">Link</fn-link>
    <fn-link href="#" underline="none">Link</fn-link>
    <fn-link href="#" underline="hover">Link</fn-link>
  </div>
  <div class="content">
    <fn-link href="#">Link</fn-link>
    <fn-link href="#" color="tertiary">Link</fn-link>
    <fn-link href="#" color="inherit">Link</fn-link>
    <fn-link href="#" color="error">Link</fn-link>
    <fn-link href="#" :color="theme => theme.colors.cyan[400]">Link</fn-link>
    <fn-link href="#" color="#2E7D32">Link</fn-link>
  </div>
</template>
