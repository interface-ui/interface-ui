<script lang="ts" setup>
import '@interface-ui/components/src/divider/src/index.less' // 开发调试的样式
import { InDivider } from '@interface-ui/components'
</script>

<template>
  <in-divider />
  <in-divider text-align="left"> left </in-divider>
  <in-divider> center </in-divider>
  <in-divider text-align="right"> right </in-divider>
</template>
