<script setup lang="ts">
import { FnButton, FnRadio, FnFormLabel } from '@fusion-ui/components'
import { createTheme } from '@fusion-ui/theme'
import { ref } from 'vue'

const theme = createTheme()

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
const checked = ref(1)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ theme.mode }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    {{ checked }}
    <fn-form-label
      v-model="checked"
      label="One"
      :value="1"
      :control="FnRadio"
    />
    <fn-form-label
      v-model="checked"
      label="Two"
      :value="2"
      :control="FnRadio"
    />
    <fn-form-label
      v-model="checked"
      label="Three"
      :value="3"
      :control="FnRadio"
    />
    <fn-form-label
      v-model="checked"
      label="Four"
      :value="4"
      :control="FnRadio"
      disabled
    />
  </div>
</template>
