<script lang="ts" setup>
import { reactive } from 'vue'

const checked = reactive<boolean[]>([true, true, true])
</script>

<template>
  <in-checkbox v-model="checked[0]" size="small" />
  <in-checkbox v-model="checked[1]" />
  <in-checkbox v-model="checked[2]" size="large" />
</template>
