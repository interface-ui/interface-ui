<script lang="ts" setup>
import '@fusion-ui-vue/components/src/chip/src/index.less'
import { ChipVariants, FnChip } from '@fusion-ui-vue/components'
import { TodayFilled } from 'fusion-ui-iconify'
import { ref } from 'vue'
import { ThemeCallBack } from '@fusion-ui-vue/theme'

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
    <fn-chip>filled</fn-chip>
    <fn-chip variant="outlined">outlined</fn-chip>
  </div>

  <!-- Clickable -->
  <div class="content">
    <fn-chip clickable>filled</fn-chip>
    <fn-chip clickable variant="outlined">outlined</fn-chip>
  </div>

  <!-- Disabled -->
  <div class="content">
    <fn-chip disabled>filled</fn-chip>
    <fn-chip disabled variant="outlined">outlined</fn-chip>
    <fn-chip disabled clickable>filled</fn-chip>
    <fn-chip disabled clickable variant="outlined">outlined</fn-chip>
  </div>

  <!-- Color -->
  <div class="content">
    <fn-chip color="primaryContainer">Primary</fn-chip>
    <fn-chip color="secondaryContainer">Secondary</fn-chip>
    <fn-chip color="primary" variant="outlined">Primary</fn-chip>
    <fn-chip color="secondary" variant="outlined">Secondary</fn-chip>
  </div>

  <!-- Icon -->
  <div class="content">
    <fn-chip>
      <today-filled />
      Today
    </fn-chip>
    <fn-chip variant="outlined">
      <today-filled />
      Today
    </fn-chip>
  </div>

  <!-- Deletable -->
  <div class="content">
    <fn-chip
      v-for="({ text, ...attrs }, index) in chipArr"
      :key="text"
      v-bind="attrs"
      @delete="onDelete(index)"
    >
      {{ text }}
    </fn-chip>
  </div>
</template>
