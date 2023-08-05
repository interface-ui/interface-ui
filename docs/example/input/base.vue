<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <div class="content">
    <fn-input v-model="value" placeholder="Please input" />
  </div>
</template>

<style scoped>
.content{
  width: 100%;
}
</style>
