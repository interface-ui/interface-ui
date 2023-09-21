<script setup lang="ts">
import { FnButton } from '@fusion-ui/components'
import { ref } from 'vue'
const button = ref('深色')

const changTheme = () => {
  const html = document.documentElement as HTMLElement
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
    button.value = '浅色'
  } else {
    html.classList.add('dark')
    html.setAttribute('data-theme', 'dark')
    button.value = '深色'
  }
}
// const checked = ref(false)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ button }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    <fn-icon-button size="small" #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
    <fn-icon-button #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
    <fn-icon-button size="large" #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
  </div>
  <div class="content">
    <fn-icon-button color="error" #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
    <fn-icon-button #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
    <fn-icon-button #default="icon">
      <fn-icon icon="mdi:cake-layered" v-bind="icon" />
    </fn-icon-button>
  </div>
</template>
