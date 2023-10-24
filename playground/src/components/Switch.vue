<script lang="ts" setup>
import { FnSwitchNew } from '@fusion-ui-vue/components'

import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)
</script>

<template>
  <fn-switch-new v-model="value1" />
  <fn-switch-new v-model="value2" />
  <fn-switch-new v-model="value3" disabled />
  <fn-switch-new v-model="value4" disabled />
</template>
