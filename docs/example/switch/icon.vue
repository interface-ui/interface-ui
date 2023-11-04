<script setup lang="ts">
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'
const { AddFilled } = pkg

const value = ref<boolean>(true)
</script>

<template>
  <fn-switch v-model="value" disabled-icon />
  <fn-switch v-model="value">
    <add-filled />
  </fn-switch>
</template>
