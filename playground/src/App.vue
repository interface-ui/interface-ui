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
const checked = ref(false)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ button }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->

  <fn-checkbox v-model="checked" color="#6366f1">
    <template #default="icon">
      <fn-icon
        v-bind="icon"
        :icon="
          checked ? 'material-symbols:star' : 'material-symbols:star-outline'
        "
      />
    </template>
  </fn-checkbox>
  <div class="content">
    <fn-button variant="outlined"> button </fn-button>
    <fn-button variant="outlined">
      <template #default="icon">
        <fn-icon icon="mdi:delete" v-bind="icon" />
        delete
      </template>
    </fn-button>
    <fn-button>
      <template #default="icon">
        save
        <fn-icon icon="mdi:content-save" v-bind="icon" />
      </template>
    </fn-button>
  </div>
</template>
