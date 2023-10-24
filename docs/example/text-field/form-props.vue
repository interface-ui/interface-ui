<script setup lang="ts">
import { styled } from '@fusion-ui-vue/theme'
import { ref } from 'vue'

const contentText = ref<string>('Hellp World')
const emptyText = ref<string>('')

const Box = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & .fn-text-field {
    width: calc(100% / 3.2);
  }

  & > div + div {
    margin-top: 30px;
  }
`
</script>

<template>
  <box flex flex-col gap-10 class="">
    <div fscw gap-3>
      <fn-text-field v-model="contentText" label="Required" required />
      <fn-text-field v-model="contentText" label="Disabled" disabled />
      <fn-text-field v-model="emptyText" label="Password" type="password" />
      <fn-text-field v-model="contentText" label="Read Only" readonly />
      <fn-text-field v-model="emptyText" label="Number" type="number" />
      <fn-text-field v-model="emptyText" label="Search Field" type="search" />
    </div>
    <div fscw gap-3>
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Required"
        required
      />
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Disabled"
        disabled
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Password"
        type="password"
      />
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Read Only"
        readonly
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Number"
        type="number"
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Search Field"
        type="search"
      />
    </div>
    <div fscw gap-3>
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Required"
        required
      />
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Disabled"
        disabled
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Password"
        type="password"
      />
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Read Only"
        readonly
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Number"
        type="number"
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Search Field"
        type="search"
      />
    </div>
  </box>
</template>
