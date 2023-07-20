<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: '显示关闭按钮', type: 'success', timeout: 0, closeBtn: true })">
      显示关闭按钮
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
