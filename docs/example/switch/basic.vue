<script setup lang="ts">
import { ref } from 'vue'

const values = ref<boolean[]>([true, true, false, false])
</script>

<template>
  <in-switch v-model="values[0]" />
  <in-switch v-model="values[1]" disabled />
  <in-switch v-model="values[2]" />
  <in-switch v-model="values[3]" disabled />
</template>
