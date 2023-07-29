<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2 />
    <fn-button type="outline" @click=" dialogVisible = true">
      show colse
    </fn-button>
    <fn-dialog
      v-model="dialogVisible"
      title="Tips"
      show-close="false"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <fn-button type="outline" @click="dialogVisible = false">取消</fn-button>
          <fn-button @click="dialogVisible = false">
            确定
          </fn-button></span>
      </template>
    </fn-dialog>

    <!-- <fn-dialog v-model="dialogVisible2">
      自定义内容
    </fn-dialog> -->
  </div>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
