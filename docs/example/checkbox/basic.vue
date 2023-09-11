<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref<boolean>(true)
const checked2 = ref<boolean>(false)
const checked3 = ref<boolean>(true)
const checked4 = ref<boolean>(false)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked1" />
      <fn-checkbox v-model="checked2" />
      <fn-checkbox v-model="checked3" disabled />
      <fn-checkbox v-model="checked4" disabled />
    </div>
  </div>
</template>
