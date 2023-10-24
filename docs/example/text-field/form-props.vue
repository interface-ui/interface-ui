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
  <box flex flex-col gap-10>
    <div fscw gap-3>
      <fn-text-field
        v-model="contentText"
        placeholder="Required"
        label="Required"
        required
      />
      <fn-text-field
        v-model="contentText"
        placeholder="Disabled"
        label="Disabled"
        disabled
      />
      <fn-text-field
        v-model="emptyText"
        placeholder="Password"
        label="Password"
        type="password"
      />
      <fn-text-field
        v-model="contentText"
        placeholder="Read Only"
        label="Read Only"
        readonly
      />
      <fn-text-field
        v-model="emptyText"
        placeholder="Number"
        label="Number"
        type="number"
      />
      <fn-text-field
        v-model="emptyText"
        placeholder="Search Field"
        label="Search Field"
        type="search"
      />
    </div>
    <div fscw gap-3>
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Required"
        placeholder="Required"
        required
      />
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Disabled"
        placeholder="Disabled"
        disabled
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Password"
        type="password"
        placeholder="Password"
      />
      <fn-text-field
        v-model="contentText"
        variant="filled"
        label="Read Only"
        placeholder="Read Only"
        readonly
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Number"
        type="number"
        placeholder="Number"
      />
      <fn-text-field
        v-model="emptyText"
        variant="filled"
        label="Search Field"
        type="search"
        placeholder="Search Field"
      />
    </div>
    <div fscw gap-3>
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Required"
        placeholder="Required"
        required
      />
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Disabled"
        placeholder="Disabled"
        disabled
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Password"
        type="password"
        placeholder="Password"
      />
      <fn-text-field
        v-model="contentText"
        variant="standard"
        label="Read Only"
        placeholder="Read Only"
        readonly
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Number"
        type="number"
        placeholder="Number"
      />
      <fn-text-field
        v-model="emptyText"
        variant="standard"
        label="Search Field"
        type="search"
        placeholder="Search Field"
      />
    </div>
  </box>
</template>
