<script lang="ts" setup>
import { FnButton } from '@fusion-ui-vue/components'
import useTheme from '@fusion-ui-vue/theme'

const theme = useTheme()
console.log('test theme', theme)
</script>

<template>
  <fn-button>Child button</fn-button>
</template>
