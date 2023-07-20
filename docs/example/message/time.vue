<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: '默认时长' })">
      默认时长
    </FnButton>
    <FnButton @click="FnMessage({ message: '默认时长', type: 'success' })">
      默认时长
    </FnButton>
    <FnButton @click="FnMessage({ message: '3秒时长', type: 'success', timeout: 3000 })">
      3秒时长
    </FnButton>
    <FnButton @click="FnMessage({ message: '一直显示', type: 'success', timeout: 0, closeBtn: true })">
      一直显示
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
