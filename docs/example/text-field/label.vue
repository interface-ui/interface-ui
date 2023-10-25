<script setup lang="ts">
import { FnTextField } from 'fusion-ui-vue'
import { styled } from '@fusion-ui-vue/theme'
import { ref } from 'vue'

const value = ref<string>('')
const Box = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  .fn-text-field {
    width: 40%;
  }
  .fn-form-label {
    justify-content: center;
    .fn-typography {
      min-width: 80px;
    }
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
