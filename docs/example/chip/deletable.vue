<script lang="ts" setup>
import type { ChipVariants } from '@interface-ui/components'
import { InChip } from '@interface-ui/components'
import { ref } from 'vue'
import type { ThemeCallBack } from '@interface-ui/theme'

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
  <in-chip
    v-for="({ text, ...attrs }, index) in chipArr"
    :key="text"
    v-bind="attrs"
    @delete="onDelete(index)"
  >
    {{ text }}
  </in-chip>
</template>
