<script setup lang="ts">
import { styled } from '@interface-ui/theme'
import { ref } from 'vue'

const contentText = ref<string>('Hello World')
const emptyText = ref<string>('')
const variants = ['outlined', 'filled', 'standard'] as const

const Box = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .in-text-field {
    width: calc(100% / 3.2);
  }

  & > div + div {
    margin-top: 30px;
  }
`
</script>

<template>
  <box flex flex-col gap-10>
    <div v-for="variant in variants" :key="variant" fscw gap-3>
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
    </div>
  </box>
</template>
