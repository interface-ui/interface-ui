<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: '默认' })">
      默认
    </FnButton>
    <FnButton state="success" @click="FnMessage({ message: '成功', type: 'success' })">
      成功
    </FnButton>
    <FnButton state="warning" @click="FnMessage({ message: '警告', type: 'warning' })">
      警告
    </FnButton>
    <FnButton state="danger" @click="FnMessage({ message: '错误', type: 'danger' })">
      错误
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
