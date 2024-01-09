<script setup lang="ts">
import { styled } from '@interface-ui/theme'
import { ref } from 'vue'

const value = ref<string>('')

const Box = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  & > .in-text-field {
    flex: 1 1 auto;
  }
`
</script>

<template>
  <box>
    <in-text-field v-model="value" size="small" label="Outlined" />
    <in-text-field
      v-model="value"
      size="small"
      variant="filled"
      label="Filled"
    />
    <in-text-field
      v-model="value"
      size="small"
      variant="standard"
      label="Standard"
    />
  </box>
  <box>
    <in-text-field v-model="value" size="medium" label="Outlined" />
    <in-text-field
      v-model="value"
      size="medium"
      variant="filled"
      label="Filled"
    />
    <in-text-field
      v-model="value"
      size="medium"
      variant="standard"
      label="Standard"
    />
  </box>
  <box>
    <in-text-field v-model="value" label="Outlined" />
    <in-text-field v-model="value" variant="filled" label="Filled" />
    <in-text-field v-model="value" variant="standard" label="Standard" />
  </box>
</template>
