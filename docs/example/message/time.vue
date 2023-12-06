<script lang="ts" setup>
import { FnMessage } from 'interface-ui'

const handleClick = (duration: number) => {
  new FnMessage().push({
    duration,
    content: `The duration is ${duration}ms`,
  })
}
</script>

<template>
  <fn-button variant="outlined" @click="handleClick(2000)"> 2000 ms </fn-button>
  <fn-button variant="outlined" @click="handleClick(4000)"> 4000 ms </fn-button>
</template>
