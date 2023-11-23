<script lang="ts" setup>
import '@fusion-ui-vue/components/divider/src/index.less' // 开发调试的样式
import { FnDivider } from '@fusion-ui-vue/components'
</script>

<template>
  <fn-divider />
  <fn-divider text-align="left"> left </fn-divider>
  <fn-divider> center </fn-divider>
  <fn-divider text-align="right"> right </fn-divider>
</template>
