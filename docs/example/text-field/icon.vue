<script setup lang="ts">
import { styled } from '@fusion-ui-vue/theme'
import { ref } from 'vue'

const value = ref<string>('')
const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  & > .fn-icon {
    margin-right: 8px;
    display: inline-flex;
  }
`
</script>

<template>
  <div fscw gap-5>
    <fn-text-field
      v-model="value"
      size="large"
      variant="standard"
      label="Standard"
      placeholder="Internal Icon"
    >
      <template #startAdornment="adornment">
        <fn-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
    </fn-text-field>
    <input-wrapper>
      <fn-icon icon="mdi:account-circle" color="onSurfaceVariant" />
      <fn-text-field
        v-model="value"
        size="large"
        variant="standard"
        label="Standard"
        placeholder="External Icon"
      />
    </input-wrapper>
  </div>
</template>
