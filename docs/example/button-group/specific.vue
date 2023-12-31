<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('info')
</script>

<template>
  <in-button-group variant="elevated" color="info">
    <in-button>Info Color</in-button>
    <in-button :color="color" @click="color = 'error'">
      Click to Error
    </in-button>
  </in-button-group>
</template>
