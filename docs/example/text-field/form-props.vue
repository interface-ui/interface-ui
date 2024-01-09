<script setup lang="ts">
import { styled } from '@interface-ui/theme'
import { ref } from 'vue'

const contentText = ref<string>('Hello World')
const emptyText = ref<string>('')
const variants = ['outlined', 'filled', 'standard'] as const

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
  <box v-for="variant in variants" :key="variant">
    <in-text-field
      v-model="contentText"
      placeholder="Required"
      label="Required"
      :variant="variant"
      required
    />
    <in-text-field
      v-model="contentText"
      placeholder="Disabled"
      label="Disabled"
      :variant="variant"
      disabled
    />
    <in-text-field
      v-model="emptyText"
      placeholder="Password"
      label="Password"
      type="password"
      :variant="variant"
    />
    <in-text-field
      v-model="contentText"
      placeholder="Read Only"
      label="Read Only"
      :variant="variant"
      readonly
    />
    <in-text-field
      v-model="emptyText"
      placeholder="Number"
      label="Number"
      type="number"
      :variant="variant"
    />
    <in-text-field
      v-model="emptyText"
      placeholder="Search Field"
      label="Search Field"
      type="search"
      :variant="variant"
    />
  </box>
</template>
