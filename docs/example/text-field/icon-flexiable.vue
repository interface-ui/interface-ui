<script setup lang="ts">
import { computed, ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'
const { VisibilityFilled, VisibilityOffFilled } = pkg
// import { VisibilityFilled, VisibilityOffFilled } from 'fusion-ui-iconify'
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
      <in-text-field
        v-model="weight"
        size="large"
        :variant="variant"
        label="Weight"
        placeholder="Weight"
      >
        <template #startAdornment="adornment">
          <in-typography v-bind="adornment"> kg </in-typography>
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
        <template #endAdornment="adornment">
          <in-typography v-bind="adornment"> $ </in-typography>
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
        <template #endAdornment="adornment">
          <in-icon-button
            v-slot="icon"
            v-bind="adornment"
            @click="showPassword = !showPassword"
          >
            <visibility-off-filled v-show="showPassword" v-bind="icon" />
            <visibility-filled v-show="!showPassword" v-bind="icon" />
          </in-icon-button>
        </template>
      </in-text-field>
    </div>
  </div>
</template>
