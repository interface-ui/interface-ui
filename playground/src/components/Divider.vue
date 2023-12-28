<script lang="ts" setup>
import '@css/divider/src/index.less' // 开发调试的样式
import { InDivider } from '@interface-ui/core'
</script>

<template>
  <in-divider />
  <in-divider text-align="left"> left </in-divider>
  <in-divider> center </in-divider>
  <in-divider text-align="right"> right </in-divider>
</template>
