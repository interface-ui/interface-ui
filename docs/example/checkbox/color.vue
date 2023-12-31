<script lang="ts" setup>
import { reactive } from 'vue'

const checked = reactive<boolean[]>([false, false, false, false, false])
</script>

<template>
  <in-checkbox v-model="checked[0]" />
  <in-checkbox v-model="checked[1]" color="tertiary" />
  <in-checkbox v-model="checked[2]" color="error" />
  <in-checkbox v-model="checked[3]" :color="theme => theme.colors.cyan[400]" />
  <in-checkbox v-model="checked[4]" color="#2E7D32" />
</template>
