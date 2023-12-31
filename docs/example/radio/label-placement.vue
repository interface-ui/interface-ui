<script lang="ts" setup>
import { InRadio } from '@interface-ui/core'
import { ref } from 'vue'

const picked = ref<string>('top')
</script>

<template>
  <in-form-label
    v-model="picked"
    :control="InRadio"
    label="Top"
    label-placement="top"
    value="top"
  />
  <in-form-label
    v-model="picked"
    :control="InRadio"
    label="Left"
    label-placement="left"
    value="left"
  />
  <in-form-label
    v-model="picked"
    :control="InRadio"
    label="Bottom"
    label-placement="bottom"
    value="bottom"
  />
  <in-form-label
    v-model="picked"
    :control="InRadio"
    label="Right"
    label-placement="right"
    value="right"
  />
</template>
