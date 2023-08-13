<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <fn-progress type="circle" :percentage="value1">
    <template #default>
      <span>
        <fn-icon icon="logos:codeigniter-icon" size="30" />
      </span>
    </template>
  </fn-progress>
  <fn-progress type="circle" :percentage="value2">
    <template #default>
      <span>
        <fn-icon icon="line-md:uploading-loop" color="green" size="30" />
      </span>
    </template>
  </fn-progress>
  <fn-progress type="circle" :percentage="value3">
    <template #default>
      <span class="default">
        <div>长路漫漫</div>
        <div>其修远兮</div>
      </span>
    </template>
  </fn-progress>
</template>

<style scoped>
.default{
font-size: 12px !important;
}
</style>
