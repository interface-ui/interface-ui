<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(75)
</script>

<template>
  <div space-y-2>
    <div fscw gap-5>
      <fn-progress :percentage="value1" duration="1" :intermediate="true" bar-color="#72c06e" status="success" />
      <fn-progress :percentage="value2" duration="2" :intermediate="true" bar-color="#d69c44" status="warning" />
      <fn-progress :percentage="value3" duration="3" :intermediate="true" bar-color="#d35a4c" status="danger" />
    </div>
  </div>
</template>
