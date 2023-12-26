<script setup lang="ts">
import { InTextField } from '@interface-ui/core'
import { styled } from '@interface-ui/theme'
import { ref } from 'vue'

const value = ref<string>('')
const Box = styled('div')`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  .in-typography {
    margin-right: 16px;
    min-width: 80px;
    text-align: right;
  }
`
</script>

<template>
  <box>
    <in-form-label
      v-model="value"
      :control="InTextField"
      label="Outlined"
      label-placement="left"
    />
    <in-form-label
      v-model="value"
      :control="InTextField"
      variant="filled"
      label="Filled"
      label-placement="left"
    />
    <in-form-label
      v-model="value"
      :control="InTextField"
      variant="standard"
      label="Standard"
      label-placement="left"
    />
  </box>
</template>
