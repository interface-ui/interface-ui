<script lang="ts" setup>
import { InCheckbox } from '@interface-ui/core'
import { reactive } from 'vue'

const checked = reactive<boolean[]>([true, true, true, true])
</script>

<template>
  <in-form-label
    v-model="checked[0]"
    :control="InCheckbox"
    label="Top"
    label-placement="top"
  />
  <in-form-label
    v-model="checked[1]"
    :control="InCheckbox"
    label="Left"
    label-placement="left"
  />
  <in-form-label
    v-model="checked[2]"
    :control="InCheckbox"
    label="Bottom"
    label-placement="bottom"
  />
  <in-form-label
    v-model="checked[3]"
    :control="InCheckbox"
    label="Right"
    label-placement="right"
  />
</template>
