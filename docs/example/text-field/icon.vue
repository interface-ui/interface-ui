<script setup lang="ts">
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'
// import { AccountCircleFilled } from 'fusion-ui-iconify'
import { styled, useTheme } from '@interface-ui/theme'
const { AccountCircleFilled } = pkg

const value = ref<string>('')
const theme = useTheme()
const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  & > .in-icon {
    margin-right: 8px;
    display: inline-flex;
  }
`
</script>

<template>
  <div fscw gap-5>
    <in-text-field
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
    </in-text-field>
    <input-wrapper>
      <account-circle-filled
        size="24"
        :color="theme.schemes.onSurfaceVariant"
      />
      <in-text-field
        v-model="value"
        size="large"
        variant="standard"
        label="Standard"
        placeholder="External Icon"
      />
    </input-wrapper>
  </div>
</template>
