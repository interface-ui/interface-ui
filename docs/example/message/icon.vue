<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <FnButton @click="FnMessage({ message: '一条消息', showIcon: false })">
    关闭 logo
  </FnButton>
</template>
