<script lang="ts" setup>
import '@core/typography/src/index.less'
import '@core/text-field/src/index.less'
import AccountCircle from '@interface-ui/icons/AccountCircleFilled'
import Visibility from '@interface-ui/icons/VisibilityFilled'
import VisibilityOff from '@interface-ui/icons/VisibilityOffFilled'
import { InTextField } from '@core'
import { ref } from 'vue'
import { styled } from '@interface-ui/theme'

const content = ref<string>('')
const showPassword = ref<boolean>(false)

const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  & > .in-icon {
    margin-right: 8px;
    display: inline-flex;
  }
`
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
  <div class="content">
    <in-text-field
      v-model="content"
      size="large"
      variant="standard"
      label="Standard"
      placeholder="Internal Icon"
    >
      <template #leading>
        <account-circle leading />
      </template>
    </in-text-field>

    <input-wrapper>
      <account-circle font-size="24" />
      <in-text-field
        v-model="content"
        size="large"
        variant="standard"
        label="Standard"
        placeholder="External Icon"
      />
    </input-wrapper>

    <in-text-field
      v-model="content"
      size="large"
      label="Password"
      supporting-text="Input your password"
      placeholder="Password"
      type="password"
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
  </div>
</template>
