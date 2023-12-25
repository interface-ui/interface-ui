<script lang="ts" setup>
import '@interface-ui/components/src/typography/src/index.less' // 开发调试的样式
import '@interface-ui/components/src/text-field/src/index.less' // 开发调试的样式

import { InTextField } from '@interface-ui/components'
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  <div class="content">
    <in-text-field
      size="small"
      v-model="content"
      variant="outlined"
      label="avb"
      placeholder="placeholder"
    />
    <in-text-field
      v-model="content"
      size="small"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <in-text-field
      v-model="content"
      size="small"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <in-text-field
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
      type="password"
      error
    />
    <in-text-field
      v-model="content"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <in-text-field
      v-model="content"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <in-text-field
      v-model="content"
      size="large"
      variant="outlined"
      label="AVBCHSHSIASHOHOSHOH"
      supporting-text="supporting text"
      placeholder="placeholder"
    />
    <in-text-field
      v-model="content"
      size="large"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <in-text-field
      v-model="content"
      size="large"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <!-- <div class="content">
    <in-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <in-typography v-bind="adornment">kg</in-typography>
      </template>
    </in-text-field>
    <in-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <in-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
    </in-text-field>
    <in-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      type="password"
    >
      <template #endAdornment="adornment">
        <in-icon-button v-bind="adornment" #default="icon">
          <in-icon icon="mdi:eye" v-bind="icon" />
        </in-icon-button>
      </template>
    </in-text-field>
    <in-text-field
      size="large"
      v-model="content"
      variant="filled"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      type="password"
    >
      <template #startAdornment="adornment">
        <in-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
      <template #endAdornment="adornment">
        <in-icon-button v-bind="adornment" #default="icon">
          <in-icon icon="mdi:eye" v-bind="icon" />
        </in-icon-button>
      </template>
    </in-text-field>

    <in-text-field
      v-model="content"
      size="large"
      variant="standard"
      label="Standard"
      supporting-text="supporting text"
      placeholder="placeholder"
    >
      <template #startAdornment="adornment">
        <in-icon icon="mdi:account-circle" v-bind="adornment" />
      </template>
    </in-text-field>
  </div> -->
</template>
