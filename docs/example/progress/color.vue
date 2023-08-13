<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <div space-y-2>
    <div fscw gap-5>
      <fn-progress :percentage="value1" background="#191f26" />
      <fn-progress :percentage="value2" background="#493311" />
      <fn-progress :percentage="value3" background="#251341" />
      <fn-progress :percentage="value1" bar-color="deeppink" />
      <fn-progress :percentage="value2" bar-color="purple" />
      <fn-progress :percentage="value3" bar-color="red" />
    </div>
  </div>
</template>
