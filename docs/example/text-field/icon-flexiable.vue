<script setup lang="ts">
import { computed, ref } from 'vue'

const weight = ref<string>('')
const amount = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const type = computed(() => (showPassword.value ? 'text' : 'password'))

const variants = ['outlined', 'filled', 'standard'] as const
</script>

<template>
  <div flex flex-col gap-5>
    <div v-for="variant in variants" :key="variant" flex gap-5>
      <fn-text-field
        v-model="weight"
        size="large"
        :variant="variant"
        label="Weight"
        placeholder="Weight"
      >
        <template #startAdornment="adornment">
          <fn-typography v-bind="adornment"> kg </fn-typography>
        </template>
      </fn-text-field>
      <fn-text-field
        v-model="amount"
        size="large"
        :variant="variant"
        supporting-text="Input the amount"
        label="Amount"
        placeholder="Weight"
      >
        <template #endAdornment="adornment">
          <fn-typography v-bind="adornment"> $ </fn-typography>
        </template>
      </fn-text-field>
      <fn-text-field
        v-model="password"
        size="large"
        :variant="variant"
        label="Password"
        supporting-text="Input your password"
        placeholder="Password"
        :type="type"
      >
        <template #endAdornment="adornment">
          <fn-icon-button v-slot="icon" v-bind="adornment">
            <fn-icon
              :icon="showPassword ? 'mdi:eye' : 'mdi:eye-off'"
              v-bind="icon"
              @click="showPassword = !showPassword"
            />
          </fn-icon-button>
        </template>
      </fn-text-field>
    </div>
  </div>
</template>
