<script lang="ts" setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <fn-button variant="outlined" @click="open = !open">Open modal</fn-button>
  <fn-modal v-model="open" />
</template>
