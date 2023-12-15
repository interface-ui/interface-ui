<script lang="ts" setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <in-button variant="outlined" @click="open = !open">Open modal</in-button>
  <in-modal v-model="open" />
</template>
