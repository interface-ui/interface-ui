<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref<boolean>(true)
</script>

<template>
  <in-radio v-model="picked" :value="true" />
  <in-radio v-model="picked" :value="false" />
</template>
