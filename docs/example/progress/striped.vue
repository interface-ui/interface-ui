<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(25)
const value2 = ref(50)
const value3 = ref(75)
const value4 = ref(100)
</script>

<template>
  <div space-y-2>
    <div fscw gap-5>
      <fn-progress :percentage="value1" duration="20" striped bar-color="#72c06e" />
      <fn-progress :percentage="value2" duration="10" striped striped-flow bar-color="#d69c44" />
      <fn-progress :percentage="value3" duration="5" striped striped-flow bar-color="#d35a4c" />
      <fn-progress :percentage="value4" duration="30" striped striped-flow bar-color="#cea23e" />
    </div>
  </div>
</template>
