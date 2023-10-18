<script lang="ts" setup>
import { FnButton } from '@fusion-ui-vue/components'
import { styled } from '@fusion-ui-vue/theme'

const StyledButton1 = styled(FnButton)(theme => ({
  '--fn-button-color': theme.palette.error,
}))
const StyledButton2 = styled(FnButton)`
  background-color: red;
  &:hover {
    background-color: deeppink !important;
  }
`
</script>

<template>
  <div>
    <StyledButton1>button</StyledButton1>
    <StyledButton2>button</StyledButton2>
  </div>
</template>
