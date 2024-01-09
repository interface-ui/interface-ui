<script setup lang="ts">
import { computed, ref } from 'vue'
import Visibility from '@interface-ui/icons/VisibilityFilled'
import VisibilityOff from '@interface-ui/icons/VisibilityOffFilled'
import { styled } from '@interface-ui/theme'

const weight = ref<string>('')
const amount = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const type = computed(() => (showPassword.value ? 'text' : 'password'))

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
      v-model="weight"
      size="large"
      :variant="variant"
      label="Weight"
      placeholder="Weight"
    >
      <template #leading>
        <in-typography leading> kg </in-typography>
      </template>
    </in-text-field>
    <in-text-field
      v-model="amount"
      size="large"
      :variant="variant"
      supporting-text="Input the amount"
      label="Amount"
      placeholder="Amount"
    >
      <template #trailing>
        <in-typography trailing> $ </in-typography>
      </template>
    </in-text-field>
    <in-text-field
      v-model="password"
      size="large"
      :variant="variant"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      :type="type"
    >
      <template #trailing="adornment">
        <in-icon-button
          v-bind="adornment"
          @click="showPassword = !showPassword"
        >
          <visibility-off v-show="showPassword" />
          <visibility v-show="!showPassword" />
        </in-icon-button>
      </template>
    </in-text-field>
  </box>
</template>
