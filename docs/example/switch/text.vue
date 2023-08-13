<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnSwtich v-model="value" checked-text="开" un-checked-text="关" />
      <FnSwtich v-model="value" width="70" checked-text="今天天气" un-checked-text="不错" />
    </div>
  </div>
</template>
