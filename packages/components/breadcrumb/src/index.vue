<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { breadcrumbKey } from './constants'
import { breadcrumbProps } from './breadcrumb'

const props = defineProps(breadcrumbProps)

const breadcrumb = ref<HTMLDivElement>()

provide(breadcrumbKey, props)

onMounted(() => {
  const items = breadcrumb.value!.querySelectorAll('.fn-breadcrumb-item')
    if (items.length) {
        const separator = <HTMLElement>items[items.length - 1].lastElementChild;
        separator.style.display = 'none';
    }
})
</script>

<template>
  <div
    ref="breadcrumb"
    class="fn-breadcrumb"
  >
    <slot />
  </div>
</template>
