<script lang="ts" setup>
import { reactive } from 'vue'

const checked = reactive<boolean[]>([true, false, true, false])
</script>

<template>
  <in-checkbox v-model="checked[0]" />
  <in-checkbox v-model="checked[1]" />
  <in-checkbox v-model="checked[2]" disabled />
  <in-checkbox v-model="checked[3]" disabled />
</template>
