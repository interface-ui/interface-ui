<script lang="ts" setup>
import '@fusion-ui-vue/components/text-field/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/input/src/index.less' // 开发调试的样式
import { FnTextField } from '@fusion-ui-vue/components'
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  <div class="content">
    <fn-text-field
      size="small"
      v-model="content"
      variant="outlined"
      label="Outlined"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      size="small"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      size="small"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <fn-text-field
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
      disabled
    />
    <fn-text-field
      v-model="content"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <fn-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <fn-typography v-bind="adornment">kg</fn-typography>
      </template>
    </fn-text-field>
    <fn-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <fn-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
    </fn-text-field>
    <fn-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      type="password"
    >
      <template #endAdornment="adornment">
        <fn-icon-button v-bind="adornment" #default="icon">
          <fn-icon icon="mdi:eye" v-bind="icon" />
        </fn-icon-button>
      </template>
    </fn-text-field>
    <fn-text-field
      size="large"
      v-model="content"
      variant="filled"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      type="password"
    >
      <template #startAdornment="adornment">
        <fn-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
      <template #endAdornment="adornment">
        <fn-icon-button v-bind="adornment" #default="icon">
          <fn-icon icon="mdi:eye" v-bind="icon" />
        </fn-icon-button>
      </template>
    </fn-text-field>

    <fn-text-field
      v-model="content"
      size="large"
      variant="standard"
      label="Standard"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <fn-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
    </fn-text-field>
  </div>
  {{ content }}
</template>
