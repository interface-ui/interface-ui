<script lang="ts" setup>
import '@css/chip/src/index.less'
import { ChipVariants, InChip } from '@interface-ui/core'
import { TodayFilled } from 'fusion-ui-iconify'
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
    color: 'secondaryContainer',
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
    <in-chip color="primaryContainer">Primary</in-chip>
    <in-chip color="secondaryContainer">Secondary</in-chip>
    <in-chip color="primary" variant="outlined">Primary</in-chip>
    <in-chip color="secondary" variant="outlined">Secondary</in-chip>
  </div>

  <!-- Icon -->
  <div class="content">
    <in-chip>
      <today-filled />
      Today
    </in-chip>
    <in-chip variant="outlined">
      <today-filled />
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
