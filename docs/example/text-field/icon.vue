<script setup lang="ts">
import { ref } from 'vue'
import AccountCircle from '@interface-ui/icons/AccountCircleFilled'
import { styled, useTheme } from '@interface-ui/theme'

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
  <in-text-field
    v-model="value"
    size="large"
    variant="standard"
    label="Standard"
    placeholder="Internal Icon"
  >
    <template #leading>
      <account-circle leading />
    </template>
  </in-text-field>
  <input-wrapper>
    <account-circle font-size="24" :color="theme.schemes.onSurfaceVariant" />
    <in-text-field
      v-model="value"
      size="large"
      variant="standard"
      label="Standard"
      placeholder="External Icon"
    />
  </input-wrapper>
</template>
