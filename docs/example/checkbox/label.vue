<script lang="ts" setup>
import { InCheckbox } from '@interface-ui/core'
import { reactive } from 'vue'

const checked = reactive<boolean[]>([true, true, true])
</script>

<template>
  <in-form-label v-model="checked[0]" :control="InCheckbox" label="Label" />
  <in-form-label
    v-model="checked[1]"
    :control="InCheckbox"
    label="Required"
    required
  />
  <in-form-label
    v-model="checked[2]"
    :control="InCheckbox"
    label="Disabled"
    disabled
  />
</template>
