<script setup lang="ts">
import { FnTextField } from 'fusion-ui-vue'
import { styled } from '@fusion-ui-vue/theme'
import { ref } from 'vue'

const value = ref<string>('')
const Box = styled('div')`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  .fn-typography {
    margin-right: 16px;
    min-width: 80px;
    text-align: right;
  }
`
</script>

<template>
  <box>
    <fn-form-label
      v-model="value"
      :control="FnTextField"
      label="Outlined"
      label-placement="left"
    />
    <fn-form-label
      v-model="value"
      :control="FnTextField"
      variant="filled"
      label="Filled"
      label-placement="left"
    />
    <fn-form-label
      v-model="value"
      :control="FnTextField"
      variant="standard"
      label="Standard"
      label-placement="left"
    />
  </box>
</template>
