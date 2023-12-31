<script lang="ts" setup>
import { InCheckbox } from '@interface-ui/core'
import { ref } from 'vue'

const checkedNames = ref<string[]>([])
</script>

<template>
  <in-typography cs="flex-basis: 100%; text-align: center;">
    {{ checkedNames }}
  </in-typography>
  <in-form-label
    v-model="checkedNames"
    :control="InCheckbox"
    label="Jack"
    value="Jack"
  />
  <in-form-label
    v-model="checkedNames"
    :control="InCheckbox"
    label="John"
    value="John"
  />
  <in-form-label
    v-model="checkedNames"
    :control="InCheckbox"
    label="Mike"
    value="Mike"
  />
</template>
