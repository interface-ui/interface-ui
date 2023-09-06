<!-- 用于测试router跳转是否有效 -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    test router view
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
