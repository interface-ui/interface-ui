<script lang="ts" setup>
import '@core/chip/src/index.less'
import { ChipVariants, InChip } from '@core'
import Today from '@interface-ui/icons/TodayFilled'
import { ref } from 'vue'
import { ThemeCallBack } from '@interface-ui/theme'

const chipArr = ref<
  {
    text: string
    variant?: ChipVariants
    deletable?: boolean
    color?: string | ThemeCallBack
  }[]
>([
  {
    text: 'Angular',
    deletable: true,
  },
  {
    text: 'React',
    color: 'primary',
    variant: 'filled',
    deletable: true,
  },
  {
    text: 'Vue.js',
    color: 'success',
  },
  {
    text: 'jQuary',
    variant: 'outlined',
    color: 'error',
    deletable: true,
  },
  {
    text: 'Handlebars.js',
    variant: 'outlined',
    color: theme => theme.colors.cyan[400],
    deletable: true,
  },
])

const onDelete = (index: number) => {
  chipArr.value.splice(index, 1)
}
</script>

<template>
  <!-- Basic -->
  <div class="content">
    <in-chip>filled</in-chip>
    <in-chip variant="outlined">outlined</in-chip>
  </div>

  <!-- Clickable -->
  <div class="content">
    <in-chip clickable>filled</in-chip>
    <in-chip clickable variant="outlined">outlined</in-chip>
  </div>

  <!-- Disabled -->
  <div class="content">
    <in-chip disabled>filled</in-chip>
    <in-chip disabled variant="outlined">outlined</in-chip>
    <in-chip disabled clickable>filled</in-chip>
    <in-chip disabled clickable variant="outlined">outlined</in-chip>
  </div>

  <!-- Color -->
  <div class="content">
    <in-chip color="primary">Primary</in-chip>
    <in-chip color="secondary">Secondary</in-chip>
    <in-chip color="info">info</in-chip>
    <in-chip color="success">success</in-chip>
    <in-chip color="error">error</in-chip>
    <in-chip color="warning">warning</in-chip>
    <in-chip :color="theme => theme.colors.cyan[400]">Cyan</in-chip>
    <in-chip color="#2E7D32">#2E7D32</in-chip>
  </div>
  <div class="content">
    <in-chip color="primary" variant="outlined">Primary</in-chip>
    <in-chip color="secondary" variant="outlined">Secondary</in-chip>
    <in-chip color="info" variant="outlined">info</in-chip>
    <in-chip color="success" variant="outlined">success</in-chip>
    <in-chip color="error" variant="outlined">error</in-chip>
    <in-chip color="warning" variant="outlined">warning</in-chip>
    <in-chip :color="theme => theme.colors.cyan[400]" variant="outlined"
      >Cyan</in-chip
    >
    <in-chip color="#2E7D32" variant="outlined">#2E7D32</in-chip>
  </div>

  <!-- Icon -->
  <div class="content">
    <in-chip>
      <today />
      Today
    </in-chip>
    <in-chip variant="outlined">
      <today />
      Today
    </in-chip>
  </div>

  <!-- Deletable -->
  <div class="content">
    <in-chip
      v-for="({ text, ...attrs }, index) in chipArr"
      :key="text"
      v-bind="attrs"
      @delete="onDelete(index)"
    >
      {{ text }}
    </in-chip>
  </div>
</template>
