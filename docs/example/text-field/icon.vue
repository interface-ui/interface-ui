<script setup lang="ts">
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'
import { styled, useTheme } from '@fusion-ui-vue/theme'

const { AccountCircleFilled } = pkg
const value = ref<string>('')
const theme = useTheme()
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
        <account-circle-filled
          v-bind="adornment"
          size="24"
          :color="theme.schemes.onSurfaceVariant"
        />
      </template>
    </fn-text-field>
    <input-wrapper>
      <account-circle-filled
        size="24"
        :color="theme.schemes.onSurfaceVariant"
      />
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
