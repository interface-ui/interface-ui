<script lang="ts" setup>
import { FnButton } from '@fusion-ui-vue/components'
import { styled } from '@fusion-ui-vue/theme'

const StyledButton = styled(FnButton)(theme => ({
  '--fn-button-color': theme.palette.error,
}))
</script>

<template>
  <div>
    <StyledButton>button</StyledButton>
  </div>
</template>
