<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(0)
const optionList = [
  { value: 0, label: 'Radio1' },
  { value: 1, label: 'Radio2' },
  { value: 2, label: 'Radio3', disabled: true },
]
</script>

<template>
  <fn-radio v-model="value" :horizontal="false" :option-list="optionList">
    Radio
  </fn-radio>
</template>
