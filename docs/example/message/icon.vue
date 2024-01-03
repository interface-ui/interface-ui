<script lang="ts" setup>
import { InButton, InMessage } from '@interface-ui/core'
import { FilterThreeFilled } from '@interface-ui/icons'

const handleClick = () => {
  new InMessage({}).push({
    content: 'this is a success message',
    severity: 'success',
    customIcon: FilterThreeFilled,
  })
}
</script>

<template>
  <in-button color="success" @click="handleClick"> Success </in-button>
</template>
