<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: '一条消息' })">
      一条消息
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
